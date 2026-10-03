/**
 * ==============================================================================
 * VARUN TEJA PORTFOLIO - MAIN INTERACTIVE LOGIC
 * Dynamic UI population, category filters, modals, Formspree form handling,
 * responsive navigation, and scroll spy.
 * ==============================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  const data = window.PORTFOLIO_DATA;
  if (!data) {
    console.error("PORTFOLIO_DATA is not loaded.");
    return;
  }

  // ============================================================================
  // 1. DYNAMIC TYPEWRITER EFFECT IN HERO (Web Developer | Vibe Coder | Ethical Hacker)
  // ============================================================================
  const roles = [
    "Web Developer | Vibe Coder | Ethical Hacker",
    "Web Developer (HTML, CSS, JS)",
    "Vibe Coder (Fast AI Prototyping)",
    "Ethical Hacker (Cybersecurity Labs)"
  ];
  const roleEl = document.getElementById("hero-dynamic-role");
  if (roleEl) {
    let roleIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typeSpeed = 100;

    function typeWriter() {
      const currentRole = roles[roleIndex];
      if (isDeleting) {
        roleEl.textContent = currentRole.substring(0, charIndex - 1);
        charIndex--;
        typeSpeed = 40;
      } else {
        roleEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 90;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2400; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400; // Pause before typing next title
      }

      setTimeout(typeWriter, typeSpeed);
    }
    typeWriter();
  }

  // ============================================================================
  // 2. STICKY NAVBAR & MOBILE MENU TOGGLE
  // ============================================================================
  const navbar = document.querySelector(".navbar");
  const hamburger = document.getElementById("hamburger-btn");
  const navMenu = document.getElementById("nav-menu");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  }, { passive: true });

  if (hamburger && navMenu) {
    hamburger.addEventListener("click", () => {
      hamburger.classList.toggle("active");
      navMenu.classList.toggle("open");
    });

    navLinks.forEach((link) => {
      link.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navMenu.classList.remove("open");
      });
    });
  }

  // Active Navigation Scroll Spy
  const sections = document.querySelectorAll("section[id]");
  window.addEventListener("scroll", () => {
    const scrollY = window.pageYOffset || document.documentElement.scrollTop;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute("id");
      const targetNavLink = document.querySelector(`.nav-menu a[href*='${sectionId}']`);

      if (targetNavLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          targetNavLink.classList.add("active");
        } else {
          targetNavLink.classList.remove("active");
        }
      }
    });
  }, { passive: true });

  // ============================================================================
  // 3. RENDER ABOUT ME ROLES (Web Developer, Vibe Coder, Ethical Hacker)
  // ============================================================================
  const rolesGrid = document.getElementById("about-roles-container");
  if (rolesGrid && data.personal.roles) {
    rolesGrid.innerHTML = data.personal.roles
      .map(
        (r) => `
        <div class="role-card glass-card">
          <div class="role-icon">${r.icon}</div>
          <div class="role-title">${r.title}</div>
          <p class="role-desc">${r.desc}</p>
        </div>
      `
      )
      .join("");
  }

  // ============================================================================
  // 4. RENDER WHAT I DO (Exactly Three Cards)
  // ============================================================================
  const whatIDoContainer = document.getElementById("what-i-do-grid");
  if (whatIDoContainer && data.whatIDo) {
    whatIDoContainer.innerHTML = data.whatIDo
      .map(
        (w) => `
        <div class="what-card glass-card">
          <div class="what-icon-box" style="border-color: ${w.color}55;">
            <span>${w.icon}</span>
          </div>
          <h3 class="what-card-title">${w.title}</h3>
          <p class="what-card-desc">${w.desc}</p>
        </div>
      `
      )
      .join("");
  }

  // ============================================================================
  // 5. RENDER SKILLS (Web Developer, Vibe Coder, Ethical Hacker)
  // ============================================================================
  const skillsContainer = document.getElementById("skills-container");
  if (skillsContainer && data.skills) {
    skillsContainer.innerHTML = data.skills
      .map(
        (cat) => `
        <div class="skill-category-card glass-card">
          <div>
            <div class="skill-category-header">
              <div class="skill-cat-icon" style="color: ${cat.accent};">${cat.icon}</div>
              <div>
                <h3 class="skill-cat-title">${cat.title}</h3>
                <span class="skill-status-tag" style="color: ${cat.accent};">Active Practice Area</span>
              </div>
            </div>
            <p class="skill-cat-desc">${cat.description}</p>
          </div>
          <div class="skill-items-list">
            ${cat.items
              .map(
                (item) => `
                <div class="skill-item">
                  <div class="skill-item-info">
                    <span class="skill-name">${item.name}</span>
                    <span class="skill-status-tag">${item.status}</span>
                  </div>
                  <span class="skill-learning-badge">Practicing</span>
                </div>
              `
              )
              .join("")}
          </div>
        </div>
      `
      )
      .join("");
  }

  // ============================================================================
  // 6. RENDER PROJECTS & FILTERING ('all', 'web', 'vibe-coding', 'ethical-hacking')
  // ============================================================================
  const projectsGrid = document.getElementById("projects-grid");
  const projectFilters = document.querySelectorAll(".project-filter-btn");

  function renderProjects(category = "all") {
    if (!projectsGrid || !data.projects) return;
    const filtered =
      category === "all"
        ? data.projects
        : data.projects.filter((p) => p.category === category);

    projectsGrid.innerHTML = filtered
      .map(
        (p) => `
        <div class="project-card glass-card" data-category="${p.category}">
          <div class="project-thumb">
            <img src="${p.image}" alt="${p.title}" loading="lazy">
            <span class="project-category-badge">${p.categoryLabel}</span>
          </div>
          <div class="project-body">
            <h3 class="project-title">${p.title}</h3>
            <p class="project-desc">${p.description}</p>
            <div class="project-tech-tags">
              ${p.technologies.map((t) => `<span class="tech-tag">${t}</span>`).join("")}
            </div>
            <div class="project-actions">
              ${p.githubUrl && p.githubUrl !== "#" ? `<a href="${p.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">GitHub</a>` : `<button class="btn btn-secondary" onclick="showToast('Source code available on request')">GitHub</button>`}
              <button class="btn btn-primary view-project-btn" data-project-id="${p.id}">View Details</button>
            </div>
          </div>
        </div>
      `
      )
      .join("");

    // Attach Details Click Listeners
    document.querySelectorAll(".view-project-btn").forEach((btn) => {
      btn.addEventListener("click", () => {
        const projId = btn.getAttribute("data-project-id");
        openProjectModal(projId);
      });
    });

    if (window.init3DCardTilt) window.init3DCardTilt();
  }

  renderProjects("all");

  projectFilters.forEach((btn) => {
    btn.addEventListener("click", () => {
      projectFilters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-category");
      renderProjects(cat);
    });
  });

  // Project Details Modal Handler
  const projectModal = document.getElementById("project-modal");
  const modalBody = document.getElementById("project-modal-body");
  const modalCloseBtn = document.getElementById("modal-close-btn");

  function openProjectModal(id) {
    const project = data.projects.find((p) => p.id === id);
    if (!project || !projectModal || !modalBody) return;

    modalBody.innerHTML = `
      <div style="margin-bottom: 20px;">
        <span class="project-category-badge" style="position: static; display: inline-block; margin-bottom: 12px;">${project.categoryLabel}</span>
        <h2 style="font-size: 1.8rem; margin-bottom: 8px; color: #ffffff;">${project.title}</h2>
        <p style="color: var(--dark-pink); font-family: var(--font-mono); font-size: 0.88rem;">Varun Teja // Project Repository</p>
      </div>
      <div style="width: 100%; height: 240px; border-radius: var(--border-radius); overflow: hidden; margin-bottom: 22px; border: 1px solid var(--border-glass);">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 1rem; color: #ffffff; margin-bottom: 8px; font-family: var(--font-mono);">SYSTEM OVERVIEW & IMPLEMENTATION:</h4>
        <p style="color: #cbd5e1; line-height: 1.7; font-size: 0.95rem;">${project.details || project.description}</p>
      </div>
      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 0.85rem; color: #ff2d95; text-transform: uppercase; margin-bottom: 10px; font-family: var(--font-mono);">TECHNOLOGIES USED:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${project.technologies.map((t) => `<span class="tech-tag" style="background: rgba(255,45,149,0.15); border-color: rgba(255,45,149,0.35); color: #ffffff;">${t}</span>`).join("")}
        </div>
      </div>
      <div style="display: flex; gap: 12px;">
        <a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="flex: 1;">Visit Repository</a>
        <button class="btn btn-primary" onclick="closeProjectModal()" style="flex: 1;">Close Details</button>
      </div>
    `;

    projectModal.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  window.closeProjectModal = function () {
    if (projectModal) {
      projectModal.classList.remove("active");
      document.body.style.overflow = "";
    }
  };

  if (modalCloseBtn) {
    modalCloseBtn.addEventListener("click", closeProjectModal);
  }

  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // ============================================================================
  // 7. RENDER EDUCATION TIMELINE
  // ============================================================================
  const eduContainer = document.getElementById("education-timeline");
  if (eduContainer && data.education) {
    eduContainer.innerHTML = data.education
      .map(
        (edu) => `
        <div class="timeline-item">
          <div class="timeline-node"></div>
          <div class="timeline-card glass-card">
            <div class="timeline-header">
              <div>
                <span class="timeline-status">${edu.statusBadge}</span>
                <h3 class="timeline-degree">${edu.degree}</h3>
                <div class="timeline-institution">${edu.institution}</div>
              </div>
              <span class="timeline-year">${edu.academicYear}</span>
            </div>
            <p class="timeline-desc">${edu.description}</p>
            
            <div class="timeline-subjects-title">Key Subjects & Focus Areas:</div>
            <div class="timeline-chips-grid">
              ${edu.subjects.map((sub) => `<span class="tech-tag" style="color: #ffffff;">${sub}</span>`).join("")}
            </div>

            <div class="timeline-subjects-title" style="color: #ff2d95; margin-top: 14px;">Certifications / Highlights:</div>
            <div class="timeline-chips-grid">
              ${edu.certifications.map((c) => `<span class="tech-tag" style="border-color: rgba(255, 45, 149, 0.4); color: #fce7f0;">${c}</span>`).join("")}
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  // ============================================================================
  // 8. FORMSPREE CONTACT FORM SUBMISSION
  // ============================================================================
  const contactForm = document.getElementById("portfolio-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", async (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const origText = submitBtn.innerHTML;
      const formAction = contactForm.getAttribute("action");

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmitting message...</span>`;

      // Check if user has set a real Formspree form ID
      if (!formAction || formAction.includes("YOUR_FORMSPREE_ID")) {
        // Fallback simulation when placeholder is present
        setTimeout(() => {
          submitBtn.disabled = false;
          submitBtn.innerHTML = origText;
          contactForm.reset();
          showToast("🚀 Message received! (Replace YOUR_FORMSPREE_ID in index.html to connect to your email)");
        }, 800);
        return;
      }

      // Submit via Formspree API
      try {
        const formData = new FormData(contactForm);
        const response = await fetch(formAction, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json"
          }
        });

        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;

        if (response.ok) {
          contactForm.reset();
          showToast("🚀 Message sent successfully via Formspree!");
        } else {
          showToast("⚠️ Could not deliver message. Please email directly.");
        }
      } catch (err) {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
        showToast("⚠️ Network error while sending. Please email directly.");
      }
    });
  }

  // ============================================================================
  // 9. COPY TO CLIPBOARD HELPER
  // ============================================================================
  window.copyToClipboard = function (text, label) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`📋 Copied ${label} to clipboard!`);
      });
    } else {
      showToast(`Contact: ${text}`);
    }
  };

  // ============================================================================
  // 10. CYBER TOAST NOTIFICATIONS
  // ============================================================================
  window.showToast = function (message) {
    let toast = document.getElementById("cyber-toast");
    if (!toast) {
      toast = document.createElement("div");
      toast.id = "cyber-toast";
      toast.className = "cyber-toast";
      document.body.appendChild(toast);
    }
    toast.innerHTML = `<span>⚡</span> <span>${message}</span>`;
    toast.classList.add("show");

    setTimeout(() => {
      toast.classList.remove("show");
    }, 3800);
  };

  // ============================================================================
  // 11. SCROLL REVEAL OBSERVER
  // ============================================================================
  const revealElements = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -50px 0px" }
    );

    revealElements.forEach((el) => observer.observe(el));
  } else {
    revealElements.forEach((el) => el.classList.add("active"));
  }
});
