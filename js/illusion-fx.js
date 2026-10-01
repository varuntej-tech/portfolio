/**
 * ==============================================================================
 * VARUN TEJA PORTFOLIO - CYBER ILLUSION EFFECTS ENGINE
 * Features:
 * 1. 3D Card Gyro / Mouse Parallax Tilt with Dynamic Specular Glare Sheen
 * 2. Cyber Click Shockwave & Particle Spark Bursts
 * 3. Smooth Custom Cyber Cursor with HUD Reticle Targeting
 * 4. Scroll Depth Progress Indicator & Kinetic Parallax
 * 5. Web Audio API Cyber Synth Feedback (Self-contained, Zero Audio Assets)
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  // ============================================================================
  // 1. CUSTOM CYBER CURSOR & HUD RETICLE
  // ============================================================================
  const isTouchDevice = () => window.matchMedia("(pointer: coarse)").matches || "ontouchstart" in window;

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
    let isMouseDown = false;

    window.addEventListener("mousemove", (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      cursorDot.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
    });

    window.addEventListener("mousedown", () => {
      isMouseDown = true;
      cursorRing.classList.add("cursor-clicking");
    });

    window.addEventListener("mouseup", () => {
      isMouseDown = false;
      cursorRing.classList.remove("cursor-clicking");
    });

    // Render loop with smooth damping
    function renderCursor() {
      ringX += (mouseX - ringX) * 0.18;
      ringY += (mouseY - ringY) * 0.18;

      cursorRing.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) ${isHovering ? "scale(1.4)" : "scale(1)"}`;
      requestAnimationFrame(renderCursor);
    }
    renderCursor();

    // Hover detection on interactive items
    const interactiveSelectors = "a, button, .filter-btn, .project-card, .gallery-item, .role-card, .social-card, input, textarea, select, .btn, .view-project-btn";
    
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
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  // ============================================================================
  // 2. 3D CARD PARALLAX TILT & SPECULAR SHEEN ILLUSION
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
        const x = e.clientX - rect.left; // 0 to width
        const y = e.clientY - rect.top;  // 0 to height

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const deltaX = (x - centerX) / centerX; // -1 to 1
        const deltaY = (y - centerY) / centerY; // -1 to 1

        const maxTilt = 8.5; // Degrees
        const rotateX = -deltaY * maxTilt;
        const rotateY = deltaX * maxTilt;

        card.style.transform = `perspective(900px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) translateZ(8px)`;

        // Move dynamic specular light sheen
        sheen.style.opacity = "1";
        sheen.style.background = `radial-gradient(circle 220px at ${x}px ${y}px, rgba(0, 242, 254, 0.25), rgba(168, 85, 247, 0.12), transparent 70%)`;
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

  // ============================================================================
  // 3. CYBER CLICK SHOCKWAVE & PARTICLE SPARKS
  // ============================================================================
  window.addEventListener("click", (e) => {
    createClickShockwave(e.clientX, e.clientY);
    createCyberSparks(e.clientX, e.clientY);
    playCyberSynthSound(680, 1100, 0.04);
  });

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
    const sparkCount = 8;
    const colors = ["#00f2fe", "#a855f7", "#38bdf8", "#00ff87", "#ffffff"];

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
      spark.style.boxShadow = `0 0 8px ${color}`;

      document.body.appendChild(spark);

      setTimeout(() => {
        spark.remove();
      }, 550);
    }
  }

  // ============================================================================
  // 4. SCROLL PROGRESS INDICATOR & KINETIC PARALLAX ILLUSION
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
  // 5. WEB AUDIO API SYNTHETIC SOUND (Zero External MP3s)
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
});
