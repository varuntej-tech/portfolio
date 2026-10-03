/**
 * ==============================================================================
 * VARUN TEJA - PORTFOLIO DATA CONFIGURATION
 * Focus: Web Developer | Vibe Coder | Ethical Hacker
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  // ----------------------------------------------------------------------------
  // Personal & Bio Information
  // ----------------------------------------------------------------------------
  personal: {
    name: "Varun Teja",
    tagline: "Web Developer | Vibe Coder | Ethical Hacker",
    heroIntro: "I build responsive, modern web applications and leverage cutting-edge AI tools for rapid vibe coding. Alongside development, I actively practice ethical hacking to explore security and defend digital systems.",
    aboutBio: "I am a dedicated technologist specializing in web development, vibe coding, and ethical hacking. I create performant, accessible web interfaces with clean HTML, CSS, and JavaScript; utilize modern AI-assisted engineering to build and prototype software at record speed; and train in authorized cybersecurity labs to discover vulnerabilities and reinforce system defenses.",
    email: "9477143@gmail.com",
    location: "India",
    status: "Active // Building, Vibe Coding & Security Lab Practicing",
    roles: [
      {
        icon: "🌐",
        title: "Web Developer",
        desc: "Building clean, accessible, and responsive user interfaces with modern HTML5, CSS3, and JavaScript."
      },
      {
        icon: "⚡",
        title: "Vibe Coder",
        desc: "Shipping functional applications at record speed by teaming up with modern AI tools and prompt engineering."
      },
      {
        icon: "🛡️",
        title: "Ethical Hacker",
        desc: "Exploring network security, vulnerability assessment, and defensive cyber practices in authorized labs."
      }
    ]
  },

  // ----------------------------------------------------------------------------
  // Skills Categories (Exactly Three Skills)
  // ----------------------------------------------------------------------------
  skills: [
    {
      id: "web-developer",
      title: "Web Developer",
      icon: "🌐",
      accent: "#ff2d95",
      description: "Crafting modern, accessible, and responsive web applications using standards-compliant HTML5, modular CSS3, and interactive JavaScript.",
      items: [
        { name: "HTML5 & Semantic Markup", status: "Core Expertise", level: 90 },
        { name: "CSS3 & Modern Layouts (Flexbox/Grid)", status: "Advanced Styling", level: 88 },
        { name: "JavaScript (ES6+)", status: "Active Building", level: 84 },
        { name: "Responsive UI & Mobile Optimization", status: "Core Practice", level: 86 },
        { name: "DOM Manipulation & Web APIs", status: "Practical Implementation", level: 82 }
      ]
    },
    {
      id: "vibe-coder",
      title: "Vibe Coder",
      icon: "⚡",
      accent: "#ffffff",
      description: "Building production-ready software fast by leveraging modern AI coding assistants, rapid prototyping workflows, and automation.",
      items: [
        { name: "AI-Assisted App Development", status: "Daily Workflow", level: 92 },
        { name: "Prompt Engineering & Architecture", status: "Advanced Flow", level: 88 },
        { name: "Rapid MVP Prototyping", status: "High-Speed Shipping", level: 90 },
        { name: "Workflow Automation & Scripting", status: "Active Practice", level: 85 },
        { name: "Iterative AI Debugging & Refactoring", status: "Core Strength", level: 86 }
      ]
    },
    {
      id: "ethical-hacker",
      title: "Ethical Hacker",
      icon: "🛡️",
      accent: "#d6226e",
      description: "Exploring vulnerability assessments, network packet inspection, web security hygiene, and defensive hardening in authorized lab setups.",
      items: [
        { name: "Cybersecurity Fundamentals", status: "Lab Research", level: 80 },
        { name: "Web Security & OWASP Awareness", status: "Hands-on Practice", level: 78 },
        { name: "Network Packet Analysis & Recon", status: "Lab Practice", level: 75 },
        { name: "Security Hardening & Best Practices", status: "Active Study", level: 76 },
        { name: "Authorized Sandbox Testing", status: "Continuous Learning", level: 82 }
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // What I Do (Exactly Three Cards)
  // ----------------------------------------------------------------------------
  whatIDo: [
    {
      icon: "🌐",
      title: "Web Developer",
      desc: "Building clean, high-performance, and responsive websites with HTML, CSS, and modern JavaScript.",
      color: "#ff2d95"
    },
    {
      icon: "⚡",
      title: "Vibe Coder",
      desc: "Building apps rapidly with AI tools, turning concepts into functional software with high-speed workflows.",
      color: "#ffffff"
    },
    {
      icon: "🛡️",
      title: "Ethical Hacker",
      desc: "Cybersecurity learning and authorized lab practice to understand vulnerabilities and system defense.",
      color: "#d6226e"
    }
  ],

  // ----------------------------------------------------------------------------
  // Projects Showcase
  // Categories: 'web', 'vibe-coding', 'ethical-hacking'
  // ----------------------------------------------------------------------------
  projects: [
    {
      id: "proj-1",
      title: "Cyber-Glassmorphism Portfolio Hub",
      category: "web",
      categoryLabel: "Web Development",
      description: "Modern, responsive personal portfolio with 3D WebGL depth, scrollytelling HUD, and cyber-glassmorphism aesthetic.",
      details: "Engineered with semantic HTML5, modern CSS3 variables, and vanilla JavaScript. Features dynamic scroll progress, 3D card tilt, custom cursor, and accessible UI.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      image: "assets/projects/calculator.svg",
      githubUrl: "https://github.com/YOUR_USERNAME",
      demoUrl: "#",
      featured: true
    },
    {
      id: "proj-2",
      title: "Interactive Web Calculator & Utility",
      category: "web",
      categoryLabel: "Web Development",
      description: "Sleek browser-based calculator with keyboard input support, memory functions, and responsive mobile layout.",
      details: "Demonstrates clean DOM manipulation, arithmetic parsing, state tracking, and dark cyber-themed glassmorphism styling.",
      technologies: ["JavaScript", "HTML5", "CSS3", "UI/UX"],
      image: "assets/projects/calculator.svg",
      githubUrl: "https://github.com/YOUR_USERNAME",
      demoUrl: "#",
      featured: false
    },
    {
      id: "proj-3",
      title: "AI Vibe Guessing Game & Solver",
      category: "vibe-coding",
      categoryLabel: "Vibe Coding",
      description: "Interactive logic game prototyped fast using AI prompting, featuring adaptive hints, score analytics, and sound FX.",
      details: "Built using AI-assisted vibe coding techniques to rapidly structure game loops, sound integration via Web Audio API, and persistent score storage.",
      technologies: ["AI Prototyping", "JavaScript", "Prompt Engineering", "Web Audio API"],
      image: "assets/projects/number-game.svg",
      githubUrl: "https://github.com/YOUR_USERNAME",
      demoUrl: "#",
      featured: true
    },
    {
      id: "proj-4",
      title: "Rapid AI Web App Generator",
      category: "vibe-coding",
      categoryLabel: "Vibe Coding",
      description: "Rapid prototyping workflow template demonstrating zero-to-deployment web app builds with modern AI tools.",
      details: "Leverages modern AI code synthesis and rapid iteration patterns to turn natural language specifications into tested, styled web components.",
      technologies: ["AI-Assisted Coding", "Rapid MVP", "JavaScript", "Workflow Tools"],
      image: "assets/projects/student-system.svg",
      githubUrl: "https://github.com/YOUR_USERNAME",
      demoUrl: "#",
      featured: false
    },
    {
      id: "proj-5",
      title: "Authorized Cybersecurity Packet Analyzer",
      category: "ethical-hacking",
      categoryLabel: "Ethical Hacking",
      description: "Network inspection and packet traffic analyzer developed in authorized virtual lab environments.",
      details: "Explores TCP/IP three-way handshakes, ICMP diagnostics, protocol anomaly detection, and defensive firewall concepts in dedicated virtual labs.",
      technologies: ["Cybersecurity", "Network Labs", "Packet Analysis", "Defense"],
      image: "assets/projects/cyber-security.svg",
      githubUrl: "https://github.com/YOUR_USERNAME",
      demoUrl: "#",
      featured: true
    },
    {
      id: "proj-6",
      title: "Web Security & Password Hash Audit Lab",
      category: "ethical-hacking",
      categoryLabel: "Ethical Hacking",
      description: "Practical security audit sandbox testing cryptographic hashing, salt verification, and safe authentication hygiene.",
      details: "Constructed to demonstrate OWASP top vulnerability mitigation, salted SHA-256 hash comparison, and brute-force mitigation guidelines in authorized sandboxes.",
      technologies: ["Security Testing", "Cryptography", "OWASP Awareness", "Lab Sandbox"],
      image: "assets/projects/security-testing.svg",
      githubUrl: "https://github.com/YOUR_USERNAME",
      demoUrl: "#",
      featured: false
    }
  ],

  // ----------------------------------------------------------------------------
  // Education Information
  // ----------------------------------------------------------------------------
  education: [
    {
      statusBadge: "Current Education",
      degree: "Diploma in Computer Engineering",
      institution: "Technical Polytechnic Institute",
      academicYear: "2024 - Present",
      description: "Focused on core computing fundamentals, web technologies, software development, and network security systems.",
      subjects: [
        "Web Development & Internet Technologies",
        "Computer Networks & Data Communications",
        "Operating Systems & Architecture",
        "Cybersecurity Fundamentals & Defense Labs",
        "Database Systems & Software Engineering"
      ],
      certifications: [
        "In progress: Web Development Practicum & Modern Front-End",
        "In progress: Cybersecurity Fundamentals & Network Defense Labs"
      ]
    },
    {
      statusBadge: "Secondary Education",
      degree: "Secondary School Certificate (SSC)",
      institution: "Board of Secondary Education",
      academicYear: "Completed",
      description: "Developed strong foundational interest in computer applications, mathematics, analytical reasoning, and software experimentation.",
      subjects: [
        "Computer Applications & Science",
        "Mathematics & Logic",
        "Physical Sciences",
        "Communication"
      ],
      certifications: [
        "School Science & Tech Exhibition Participant"
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // Social Media Links (GitHub, LinkedIn, Instagram, YouTube - No Snapchat)
  // ----------------------------------------------------------------------------
  socials: [
    {
      platform: "GitHub",
      username: "YOUR_USERNAME",
      url: "https://github.com/YOUR_USERNAME", // Placeholder: Replace with your GitHub username
      icon: "github",
      description: "Explore my open-source web repositories and coding projects.",
      color: "#ffffff",
      buttonText: "View GitHub"
    },
    {
      platform: "LinkedIn",
      username: "YOUR_USERNAME",
      url: "https://linkedin.com/in/YOUR_USERNAME", // Placeholder: Replace with your LinkedIn profile
      icon: "linkedin",
      description: "Connect professionally for tech opportunities and collaborations.",
      color: "#0077b5",
      buttonText: "Connect on LinkedIn"
    },
    {
      platform: "Instagram",
      username: "@ft.varunnz",
      url: "https://instagram.com/ft.varunnz",
      icon: "instagram",
      description: "Follow my personal updates, tech stories, and project moments.",
      color: "#e1306c",
      buttonText: "Visit Instagram"
    },
    {
      platform: "YouTube",
      username: "@varunteja",
      url: "https://www.youtube.com/@varunteja",
      icon: "youtube",
      description: "Watch tech demonstrations, coding walkthroughs, and tutorials.",
      color: "#ff0000",
      buttonText: "Subscribe on YouTube"
    }
  ]
};

// Export to window for vanilla browser compatibility
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
