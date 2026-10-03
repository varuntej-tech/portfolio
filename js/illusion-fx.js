/**
 * ==============================================================================
 * VARUN TEJA PORTFOLIO - CYBER ILLUSION EFFECTS & RESPONSIVE ENGINE
 * Features:
 * 1. 3D Card Parallax Tilt & Specular Glare Sheen (Desktop & Mobile Gyroscope)
 * 2. Magnetic Button Pull Illusion (Desktop)
 * 3. Mobile Touch Tap Shockwave & Neon Spark Bursts
 * 4. Interactive Global Cyber Spotlight Torch Illusion
 * 5. Hacker Text Scramble / Hologram Decryption Illusion
 * 6. Smooth Custom Cyber Cursor with HUD Reticle Targeting
 * 7. Scroll Depth Progress Indicator & Kinetic Parallax
 * 8. Web Audio API Cyber Synth Feedback (Self-contained, Zero Audio Assets)
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const isTouchDevice = () => window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;

  // ============================================================================
  // 1. GLOBAL CYBER SPOTLIGHT TORCH ILLUSION
  // ============================================================================
  const spotlight = document.createElement("div");
  spotlight.id = "cyber-spotlight";
  spotlight.className = "cyber-spotlight";
  document.body.appendChild(spotlight);

  function updateSpotlight(x, y) {
    spotlight.style.background = `radial-gradient(650px circle at ${x}px ${y}px, rgba(151, 7, 71, 0.16), rgba(255, 255, 255, 0.05) 40%, transparent 70%)`;
  }

  window.addEventListener("mousemove", (e) => {
    updateSpotlight(e.clientX, e.clientY);
  }, { passive: true });

  window.addEventListener("touchmove", (e) => {
    if (e.touches && e.touches[0]) {
      updateSpotlight(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  // ============================================================================
  // 2. CUSTOM CYBER CURSOR & HUD RETICLE (DESKTOP)
  // ============================================================================
  if (!isTouchDevice()) {
    const cursorDot = document.createElement("div");
    cursorDot.id = "cyber-cursor-dot";
    cursorDot.className = "cyber-cursor-dot";

    const cursorRing = document.createElement("div");
    cursorRing.id = "cyber-cursor-ring";
    cursorRing.className = "cyber-cursor-ring";
    cursorRing.innerHTML = `
      <span class="reticle-bracket top-left"></span>
      <span class="reticle-bracket top-right"></span>
      <span class="reticle-bracket bottom-left"></span>
      <span class="reticle-bracket bottom-right"></span>
    `;

    document.body.appendChild(cursorDot);
    document.body.appendChild(cursorRing);

    let mouseX = window.innerWidth / 2;
    let mouseY = window.innerHeight / 2;
    let ringX = mouseX;
    let ringY = mouseY;
    let isHovering = false;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    window.addEventListener("mousedown", () => {
      cursorRing.classList.add("cursor-clicking");
    });

    window.addEventListener("mouseup", () => {
      cursorRing.classList.remove("cursor-clicking");
    });

    // Render loop with smooth spring damping
    function renderCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) ${isHovering ? "scale(1.4)" : "scale(1)"}`;
      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // Hover detection on interactive items
    const interactiveSelectors = "a, button, .filter-btn, .project-card, .gallery-item, .role-card, .social-card, input, textarea, select, .btn, .view-project-btn, .brand-badge";
    
    function attachCursorHover() {
      document.querySelectorAll(interactiveSelectors).forEach((el) => {
        el.addEventListener("mouseenter", () => {
          isHovering = true;
          cursorRing.classList.add("cursor-hover");
        });
        el.addEventListener("mouseleave", () => {
          isHovering = false;
          cursorRing.classList.remove("cursor-hover");
        });
      });
    }
    attachCursorHover();

    // Re-attach when dynamic items render
    const observer = new MutationObserver(() => {
      attachCursorHover();
      init3DCardTilt();
      initMagneticButtons();
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // ============================================================================
  // 3. MAGNETIC BUTTON PULL ILLUSION (DESKTOP)
  // ============================================================================
  window.initMagneticButtons = initMagneticButtons;
  function initMagneticButtons() {
    if (isTouchDevice()) return;

    const magneticElements = document.querySelectorAll(
      ".btn, .nav-cta-btn, .social-circle-btn, .filter-btn, .brand-badge, .cyber-sound-btn"
    );

    magneticElements.forEach((el) => {
      if (el.dataset.magneticInit) return;
      el.dataset.magneticInit = "true";

      el.addEventListener("mousemove", (e) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - (rect.left + rect.width / 2);
        const y = e.clientY - (rect.top + rect.height / 2);

        // Pull toward cursor by 35% of offset
        el.style.transform = `translate(${x * 0.35}px, ${y * 0.35}px) scale(1.03)`;
      });

      el.addEventListener("mouseleave", () => {
        el.style.transform = "translate(0px, 0px) scale(1)";
        el.style.transition = "transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)";
        setTimeout(() => {
          el.style.transition = "";
        }, 400);
      });
    });
  }

  initMagneticButtons();

  // ============================================================================
  // 4. 3D CARD PARALLAX TILT & SPECULAR SHEEN (DESKTOP & MOBILE GYRO)
  // ============================================================================
  window.init3DCardTilt = init3DCardTilt;
  function init3DCardTilt() {
    if (isTouchDevice()) return;

    const cards = document.querySelectorAll(
      ".glass-card, .role-card, .skill-category-card, .project-card, .what-card, .social-card, .timeline-card, .achievement-card"
    );

    cards.forEach((card) => {
      if (card.dataset.tiltInitialized) return;
      card.dataset.tiltInitialized = "true";

      // Create holographic sheen element inside card
      let sheen = card.querySelector(".card-sheen");
      if (!sheen) {
        sheen = document.createElement("div");
        sheen.className = "card-sheen";
        card.appendChild(sheen);
      }

      card.addEventListener("mousemove", (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX;
        const deltaY = (y - centerY) / centerY;

        const maxTilt = 8.5;
        const rotateX = -deltaY * maxTilt;
        const rotateY = deltaX * maxTilt;

        card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`;

        // Move dynamic specular light sheen
        sheen.style.opacity = "1";
        sheen.style.background = `radial-gradient(circle 220px at ${x}px ${y}px, rgba(151, 7, 71, 0.4), rgba(255, 255, 255, 0.22), transparent 70%)`;
      });

      card.addEventListener("mouseleave", () => {
        card.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) translateZ(0px)";
        card.style.transition = "transform 0.5s cubic-bezier(0.16, 1, 0.3, 1)";
        sheen.style.opacity = "0";

        setTimeout(() => {
          card.style.transition = "";
        }, 500);
      });

      card.addEventListener("mouseenter", () => {
        card.style.transition = "none";
      });
    });
  }

  init3DCardTilt();

  // Mobile Gyroscope 3D Tilt for Hero Card
  if (isTouchDevice() && window.DeviceOrientationEvent) {
    window.addEventListener("deviceorientation", (e) => {
      if (e.gamma !== null && e.beta !== null) {
        const tiltX = Math.max(-14, Math.min(14, e.gamma * 0.4));
        const tiltY = Math.max(-14, Math.min(14, (e.beta - 45) * 0.4));

        const heroCard = document.querySelector(".hero-tech-card");
        if (heroCard) {
          heroCard.style.transform = `perspective(800px) rotateX(${-tiltY.toFixed(1)}deg) rotateY(${tiltX.toFixed(1)}deg)`;
        }
      }
    }, { passive: true });
  }

  // ============================================================================
  // 5. CYBER CLICK & TOUCH TAP SHOCKWAVE WITH SPARKS
  // ============================================================================
  // Desktop Click
  window.addEventListener("click", (e) => {
    triggerCyberShockwave(e.clientX, e.clientY);
  });

  // Mobile Touch Tap
  window.addEventListener("touchstart", (e) => {
    if (e.touches && e.touches[0]) {
      triggerCyberShockwave(e.touches[0].clientX, e.touches[0].clientY);
    }
  }, { passive: true });

  function triggerCyberShockwave(x, y) {
    createClickShockwave(x, y);
    createCyberSparks(x, y);
    playCyberSynthSound(680, 1150, 0.04);
  }

  function createClickShockwave(x, y) {
    const wave = document.createElement("div");
    wave.className = "cyber-shockwave";
    wave.style.left = `${x}px`;
    wave.style.top = `${y}px`;
    document.body.appendChild(wave);

    setTimeout(() => {
      wave.remove();
    }, 600);
  }

  function createCyberSparks(x, y) {
    const sparkCount = isTouchDevice() ? 6 : 10;
    const colors = ["#970747", "#ffffff", "#d6226e", "#ff75a0", "#fce7f0"];

    for (let i = 0; i < sparkCount; i++) {
      const spark = document.createElement("div");
      spark.className = "cyber-spark";

      const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.5;
      const distance = 35 + Math.random() * 45;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;
      const color = colors[Math.floor(Math.random() * colors.length)];

      spark.style.left = `${x}px`;
      spark.style.top = `${y}px`;
      spark.style.setProperty("--tx", `${tx}px`);
      spark.style.setProperty("--ty", `${ty}px`);
      spark.style.backgroundColor = color;
      spark.style.boxShadow = `0 0 10px ${color}`;

      document.body.appendChild(spark);

      setTimeout(() => {
        spark.remove();
      }, 550);
    }
  }

  // ============================================================================
  // 6. HACKER TEXT SCRAMBLE / DECRYPTION ILLUSION
  // ============================================================================
  const cyberChars = "0123456789ABCDEF!<>-_\\/[]{}—=+*^?#";
  function decryptText(element) {
    if (element.dataset.decrypting === "true") return;
    element.dataset.decrypting = "true";

    const originalText = element.getAttribute("data-original-text") || element.innerText;
    element.setAttribute("data-original-text", originalText);
    const originalHtml = element.getAttribute("data-original-html") || element.innerHTML;
    element.setAttribute("data-original-html", originalHtml);

    let iteration = 0;
    const maxIterations = originalText.length;
    const interval = setInterval(() => {
      element.innerText = originalText
        .split("")
        .map((char, index) => {
          if (char === " " || char === "\n") return char;
          if (index < iteration) {
            return originalText[index];
          }
          return cyberChars[Math.floor(Math.random() * cyberChars.length)];
        })
        .join("");

      if (iteration >= maxIterations) {
        clearInterval(interval);
        element.innerHTML = originalHtml;
        element.dataset.decrypting = "false";
      }
      iteration += 1 / 2;
    }, 30);
  }

  // Attach to Brand Logo and Section Badges
  document.querySelectorAll(".brand-text, .hero-chip span:last-child, .section-badge span:last-child").forEach((el) => {
    el.addEventListener("mouseenter", () => decryptText(el));
    el.addEventListener("click", () => decryptText(el));
  });

  // ============================================================================
  // 7. SCROLL PROGRESS INDICATOR & KINETIC PARALLAX ILLUSION
  // ============================================================================
  let progressBar = document.getElementById("scroll-progress-bar");
  if (!progressBar) {
    progressBar = document.createElement("div");
    progressBar.id = "scroll-progress-bar";
    progressBar.className = "scroll-progress-bar";
    document.body.appendChild(progressBar);
  }

  window.addEventListener("scroll", () => {
    const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0;
    progressBar.style.width = `${progress}%`;
  }, { passive: true });

  // ============================================================================
  // 8. WEB AUDIO API SYNTHETIC SOUND (Zero External MP3s)
  // ============================================================================
  let audioCtx = null;
  let soundEnabled = false;

  function initAudio() {
    if (!audioCtx) {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (AudioContext) {
        audioCtx = new AudioContext();
      }
    }
  }

  function playCyberSynthSound(freqStart = 500, freqEnd = 900, duration = 0.05) {
    if (!soundEnabled || !audioCtx) return;
    try {
      if (audioCtx.state === "suspended") {
        audioCtx.resume();
      }
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();

      osc.type = "sine";
      osc.frequency.setValueAtTime(freqStart, audioCtx.currentTime);
      osc.frequency.exponentialRampToValueAtTime(freqEnd, audioCtx.currentTime + duration);

      gain.gain.setValueAtTime(0.04, audioCtx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, audioCtx.currentTime + duration);

      osc.connect(gain);
      gain.connect(audioCtx.destination);

      osc.start();
      osc.stop(audioCtx.currentTime + duration);
    } catch (e) {
      // Audio not supported or blocked
    }
  }

  // Sound toggle button in Navbar
  const soundToggleBtn = document.getElementById("cyber-sound-toggle");
  if (soundToggleBtn) {
    soundToggleBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      initAudio();
      soundEnabled = !soundEnabled;

      if (soundEnabled) {
        soundToggleBtn.classList.add("active");
        soundToggleBtn.innerHTML = `<span>🔊</span> <span class="sound-label">AUDIO: ON</span>`;
        if (window.showToast) window.showToast("🔊 Cyber Sound FX Enabled!");
        playCyberSynthSound(440, 880, 0.08);
      } else {
        soundToggleBtn.classList.remove("active");
        soundToggleBtn.innerHTML = `<span>🔈</span> <span class="sound-label">AUDIO: OFF</span>`;
        if (window.showToast) window.showToast("🔈 Cyber Sound FX Muted");
      }
    });
  }

  // ============================================================================
  // 9. SCROLLYTELLING CHAPTER TRACKER & HUD RAIL ENGINE
  // ============================================================================
  const hudRailProgress = document.getElementById("scrolly-progress");
  const chapterItems = document.querySelectorAll(".scrolly-chapter-item");
  const chapterIds = ["home", "about", "skills", "projects", "education", "contact"];

  if (chapterItems.length > 0) {
    // Smooth chapter click navigation
    chapterItems.forEach((item) => {
      item.addEventListener("click", (e) => {
        e.preventDefault();
        const targetId = item.getAttribute("data-chapter") || item.getAttribute("href").replace("#", "");
        const targetSec = document.getElementById(targetId);
        if (targetSec) {
          targetSec.scrollIntoView({ behavior: "smooth" });
          playCyberSynthSound(520, 880, 0.05);
        }
      });
    });

    // Update active chapter & vertical rail progress on scroll
    function updateScrollytelling() {
      const scrollY = window.pageYOffset || document.documentElement.scrollTop;
      const viewportMid = scrollY + window.innerHeight * 0.42;
      let activeIndex = 0;

      chapterIds.forEach((id, index) => {
        const sec = document.getElementById(id);
        if (sec) {
          const top = sec.offsetTop;
          if (viewportMid >= top) {
            activeIndex = index;
          }
        }
      });

      chapterItems.forEach((item, index) => {
        if (index === activeIndex) {
          item.classList.add("active");
        } else {
          item.classList.remove("active");
        }
      });

      if (hudRailProgress && chapterItems.length > 1) {
        const firstItem = chapterItems[0];
        const lastItem = chapterItems[chapterItems.length - 1];
        if (firstItem && lastItem) {
          const totalDistance = lastItem.offsetTop - firstItem.offsetTop;
          const currentItem = chapterItems[activeIndex];
          if (totalDistance > 0 && currentItem) {
            const currentDistance = currentItem.offsetTop - firstItem.offsetTop;
            hudRailProgress.style.height = `${(currentDistance / totalDistance) * 100}%`;
          }
        }
      }
    }

    window.addEventListener("scroll", updateScrollytelling, { passive: true });
    window.addEventListener("resize", updateScrollytelling, { passive: true });
    updateScrollytelling();
  }
});
