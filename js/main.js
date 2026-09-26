/**
 * ==============================================================================
 * VARUN TEJA PORTFOLIO - MAIN INTERACTIVE LOGIC
 * Dynamic UI population, category filters, modals, lightbox, form handling,
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
  // 1. DYNAMIC TYPEWRITER EFFECT IN HERO
  // ============================================================================
  const roles = [
    "Student",
    "Programmer",
    "Cybersecurity Enthusiast",
    "Hardware Enthusiast",
    "Digital Editor"
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
        typeSpeed = 45;
      } else {
        roleEl.textContent = currentRole.substring(0, charIndex + 1);
        charIndex++;
        typeSpeed = 110;
      }

      if (!isDeleting && charIndex === currentRole.length) {
        typeSpeed = 2200; // Pause at end of word
        isDeleting = true;
      } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        typeSpeed = 400; // Pause before typing new word
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
  });

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
    const scrollY = window.pageYOffset;
    sections.forEach((current) => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 100;
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
  });

  // ============================================================================
  // 3. RENDER ABOUT ME ROLES
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
  // 4. RENDER SKILLS
  // ============================================================================
  const skillsContainer = document.getElementById("skills-container");
  if (skillsContainer && data.skills) {
    skillsContainer.innerHTML = data.skills
      .map(
        (cat) => `
        <div class="skill-category-card glass-card">
          <div>
            <div class="skill-category-header">
              <div class="skill-cat-icon" style="color: ${cat.accent}">${cat.icon}</div>
              <div>
                <h3 class="skill-cat-title">${cat.title}</h3>
                <span class="skill-status-tag" style="color: ${cat.accent}">Active Practice Area</span>
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
  // 5. RENDER PROJECTS & FILTERING
  // ============================================================================
  const projectsGrid = document.getElementById("projects-grid");
  const projectFilters = document.querySelectorAll(".project-filter-btn");

  function renderProjects(category = "all") {
    if (!projectsGrid) return;
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
              ${p.demoUrl && p.demoUrl !== "#" ? `<a href="${p.demoUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Live Demo</a>` : `<button class="btn btn-secondary" onclick="showToast('Demo preview in project details')">Demo</button>`}
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
        <h2 style="font-size: 1.8rem; margin-bottom: 8px;">${project.title}</h2>
        <p style="color: var(--cyan); font-family: var(--font-mono); font-size: 0.88rem;">Varun Teja // Project Repository</p>
      </div>
      <div style="width: 100%; height: 260px; border-radius: var(--border-radius); overflow: hidden; margin-bottom: 22px; border: 1px solid var(--border-glass);">
        <img src="${project.image}" alt="${project.title}" style="width: 100%; height: 100%; object-fit: cover;">
      </div>
      <div style="margin-bottom: 20px;">
        <h4 style="font-size: 1rem; color: #ffffff; margin-bottom: 8px; font-family: var(--font-mono);">SYSTEM OVERVIEW & IMPLEMENTATION:</h4>
        <p style="color: #cbd5e1; line-height: 1.7; font-size: 0.95rem;">${project.details || project.description}</p>
      </div>
      <div style="margin-bottom: 24px;">
        <h4 style="font-size: 0.85rem; color: var(--cyan); text-transform: uppercase; margin-bottom: 10px; font-family: var(--font-mono);">TECHNOLOGIES USED:</h4>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          ${project.technologies.map((t) => `<span class="tech-tag" style="background: rgba(0, 242, 254, 0.1); border-color: rgba(0, 242, 254, 0.3); color: #ffffff;">${t}</span>`).join("")}
        </div>
      </div>
      <div style="display: flex; gap: 14px; flex-wrap: wrap; border-top: 1px solid var(--border-glass); padding-top: 20px;">
        ${project.githubUrl && project.githubUrl !== "#" ? `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary">Open GitHub Repository</a>` : `<button class="btn btn-secondary" onclick="showToast('Repository is in private active lab')">GitHub (Authorized Lab)</button>`}
        <button class="btn btn-primary" onclick="showToast('Demonstration ready for review'); closeProjectModal();">Confirm Review</button>
      </div>
    `;

    projectModal.classList.add("active");
  }

  function closeProjectModal() {
    if (projectModal) projectModal.classList.remove("active");
  }

  if (modalCloseBtn) modalCloseBtn.addEventListener("click", closeProjectModal);
  if (projectModal) {
    projectModal.addEventListener("click", (e) => {
      if (e.target === projectModal) closeProjectModal();
    });
  }

  // ============================================================================
  // 6. RENDER PHOTO GALLERY & LIGHTBOX
  // ============================================================================
  const galleryGrid = document.getElementById("gallery-grid");
  const galleryFilters = document.querySelectorAll(".gallery-filter-btn");
  let currentGalleryItems = [...data.gallery];
  let currentLightboxIndex = 0;

  function renderGallery(category = "all") {
    if (!galleryGrid) return;
    currentGalleryItems =
      category === "all"
        ? data.gallery
        : data.gallery.filter((g) => g.category === category);

    galleryGrid.innerHTML = currentGalleryItems
      .map(
        (g, idx) => `
        <div class="gallery-item glass-card" data-index="${idx}" data-category="${g.category}">
          <img src="${g.image}" alt="${g.title}" loading="lazy">
          <div class="gallery-overlay">
            <span class="gallery-item-cat">${g.categoryLabel}</span>
            <h4 class="gallery-item-title">${g.title}</h4>
          </div>
        </div>
      `
      )
      .join("");

    // Lightbox triggers
    document.querySelectorAll(".gallery-item").forEach((el) => {
      el.addEventListener("click", () => {
        const index = parseInt(el.getAttribute("data-index"), 10);
        openLightbox(index);
      });
    });
  }

  renderGallery("all");

  galleryFilters.forEach((btn) => {
    btn.addEventListener("click", () => {
      galleryFilters.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");
      const cat = btn.getAttribute("data-category");
      renderGallery(cat);
    });
  });

  // Lightbox Implementation
  const lightbox = document.getElementById("gallery-lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDesc = document.getElementById("lightbox-desc");
  const lightboxClose = document.getElementById("lightbox-close");
  const lightboxPrev = document.getElementById("lightbox-prev");
  const lightboxNext = document.getElementById("lightbox-next");

  function openLightbox(index) {
    if (!lightbox || currentGalleryItems.length === 0) return;
    currentLightboxIndex = (index + currentGalleryItems.length) % currentGalleryItems.length;
    const item = currentGalleryItems[currentLightboxIndex];

    lightboxImg.src = item.image;
    lightboxImg.alt = item.title;
    lightboxTitle.textContent = item.title;
    lightboxDesc.textContent = item.description || `${item.categoryLabel} snapshot from Varun Teja's portfolio.`;

    lightbox.classList.add("active");
  }

  function closeLightbox() {
    if (lightbox) lightbox.classList.remove("active");
  }

  if (lightboxClose) lightboxClose.addEventListener("click", closeLightbox);
  if (lightboxPrev) {
    lightboxPrev.addEventListener("click", (e) => {
      e.stopPropagation();
      openLightbox(currentLightboxIndex - 1);
    });
  }
  if (lightboxNext) {
    lightboxNext.addEventListener("click", (e) => {
      e.stopPropagation();
      openLightbox(currentLightboxIndex + 1);
    });
  }
  if (lightbox) {
    lightbox.addEventListener("click", (e) => {
      if (e.target === lightbox || e.target.classList.contains("lightbox-img-wrap")) {
        closeLightbox();
      }
    });
  }

  // Keyboard navigation for lightbox & modals
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeLightbox();
      closeProjectModal();
      closeUploadModal();
    } else if (lightbox && lightbox.classList.contains("active")) {
      if (e.key === "ArrowLeft") openLightbox(currentLightboxIndex - 1);
      if (e.key === "ArrowRight") openLightbox(currentLightboxIndex + 1);
    }
  });

  // Upload/Add Photo Simulation Modal
  const uploadModal = document.getElementById("upload-modal");
  const openUploadBtn = document.getElementById("open-upload-btn");
  const closeUploadBtn = document.getElementById("close-upload-btn");
  const uploadForm = document.getElementById("upload-form");

  function openUploadModal() {
    if (uploadModal) uploadModal.classList.add("active");
  }
  function closeUploadModal() {
    if (uploadModal) uploadModal.classList.remove("active");
  }

  if (openUploadBtn) openUploadBtn.addEventListener("click", openUploadModal);
  if (closeUploadBtn) closeUploadBtn.addEventListener("click", closeUploadModal);
  if (uploadModal) {
    uploadModal.addEventListener("click", (e) => {
      if (e.target === uploadModal) closeUploadModal();
    });
  }

  if (uploadForm) {
    uploadForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const title = document.getElementById("upload-title").value.trim();
      const cat = document.getElementById("upload-category").value;
      const desc = document.getElementById("upload-desc").value.trim();
      const fileInput = document.getElementById("upload-file");

      let previewImage = "assets/gallery/coding-setup.svg";
      if (fileInput.files && fileInput.files[0]) {
        previewImage = URL.createObjectURL(fileInput.files[0]);
      }

      // Add to runtime gallery array
      const newItem = {
        id: "gal-custom-" + Date.now(),
        title: title || "New Project Photo",
        category: cat,
        categoryLabel: cat.toUpperCase(),
        description: desc || "Recently added project photograph.",
        image: previewImage
      };

      data.gallery.unshift(newItem);
      renderGallery("all");
      closeUploadModal();
      uploadForm.reset();
      showToast("✨ New photo added to gallery!");
    });
  }

  // ============================================================================
  // 7. RENDER EDUCATION
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
            
            <div class="timeline-subjects-title">Key Subjects & Practical Coursework:</div>
            <div class="timeline-chips-grid">
              ${edu.subjects.map((sub) => `<span class="tech-tag" style="color: #ffffff;">${sub}</span>`).join("")}
            </div>

            <div class="timeline-subjects-title" style="color: var(--purple); margin-top: 14px;">Certifications / Highlights:</div>
            <div class="timeline-chips-grid">
              ${edu.certifications.map((c) => `<span class="tech-tag" style="border-color: rgba(168, 85, 247, 0.4); color: var(--purple);">${c}</span>`).join("")}
            </div>
          </div>
        </div>
      `
      )
      .join("");
  }

  // ============================================================================
  // 8. RENDER ACHIEVEMENTS & CERTIFICATIONS
  // ============================================================================
  const achieveContainer = document.getElementById("achievements-grid");
  if (achieveContainer && data.achievements) {
    achieveContainer.innerHTML = data.achievements
      .map(
        (ach) => `
        <div class="achievement-card glass-card">
          <div class="achievement-thumb" onclick="openLightboxFromSrc('${ach.image}', '${ach.title}', '${ach.description}')">
            <img src="${ach.image}" alt="${ach.title}" loading="lazy">
          </div>
          <div class="achievement-meta">
            <span>${ach.type}</span>
            <span>${ach.date}</span>
          </div>
          <h3 class="achievement-title">${ach.title}</h3>
          <div class="achievement-issuer">${ach.issuer}</div>
          <p class="achievement-desc">${ach.description}</p>
          <button class="btn btn-secondary" style="margin-top: auto; padding: 7px 14px; font-size: 0.8rem;" onclick="openLightboxFromSrc('${ach.image}', '${ach.title}', '${ach.description}')">
            Preview Certificate
          </button>
        </div>
      `
      )
      .join("");
  }

  window.openLightboxFromSrc = function (src, title, desc) {
    if (!lightbox) return;
    lightboxImg.src = src;
    lightboxImg.alt = title;
    lightboxTitle.textContent = title;
    lightboxDesc.textContent = desc;
    lightbox.classList.add("active");
  };

  // ============================================================================
  // 9. RENDER WHAT I DO
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
  // 10. RENDER MY INTERESTS
  // ============================================================================
  const interestsContainer = document.getElementById("interests-grid");
  if (interestsContainer && data.interests) {
    interestsContainer.innerHTML = data.interests
      .map(
        (item) => `
        <div class="interest-item glass-card">
          <div class="interest-icon">${item.icon}</div>
          <div class="interest-name">${item.name}</div>
        </div>
      `
      )
      .join("");
  }

  // ============================================================================
  // 11. RENDER SOCIAL MEDIA
  // ============================================================================
  const socialsContainer = document.getElementById("socials-grid");
  if (socialsContainer && data.socials) {
    socialsContainer.innerHTML = data.socials
      .map(
        (s) => `
        <div class="social-card glass-card" data-platform="${s.platform}">
          <div class="social-logo-box" style="border-color: ${s.color}; color: ${s.color};">
            ${s.platform === "Instagram" ? "📸" : s.platform === "Snapchat" ? "👻" : "▶️"}
          </div>
          <div>
            <h3 class="social-platform-name">${s.platform}</h3>
            <div class="social-username">${s.username}</div>
            <p class="social-desc">${s.description}</p>
          </div>
          <a href="${s.url}" target="_blank" rel="noopener noreferrer" class="btn btn-secondary" style="width: 100%;">
            ${s.buttonText}
          </a>
        </div>
      `
      )
      .join("");
  }

  // ============================================================================
  // 12. CONTACT FORM & ACTIONS
  // ============================================================================
  const contactForm = document.getElementById("portfolio-contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const submitBtn = contactForm.querySelector("button[type='submit']");
      const origText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span>Transmitting message...</span>`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.innerHTML = origText;
        contactForm.reset();
        showToast("🚀 Message transmitted successfully! Varun will respond shortly.");
      }, 1000);
    });
  }

  // Copy helper
  window.copyToClipboard = function (text, label) {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then(() => {
        showToast(`📋 Copied ${label} to clipboard!`);
      });
    } else {
      showToast(`Contact: ${text}`);
    }
  };

  // Toast Function
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
  // 13. SCROLL REVEAL OBSERVER
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
    // Fallback if IntersectionObserver not available
    revealElements.forEach((el) => el.classList.add("active"));
  }
});
