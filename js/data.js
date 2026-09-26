/**
 * ==============================================================================
 * VARUN TEJA - PORTFOLIO DATA CONFIGURATION
 * ==============================================================================
 * This file contains all the content, projects, gallery photos, skills, and links
 * displayed on the portfolio website.
 * 
 * TO ADD OR MODIFY CONTENT:
 * Simply edit the values, add new items to the arrays, or change text.
 * The website will automatically update without touching HTML!
 * ==============================================================================
 */

const PORTFOLIO_DATA = {
  // ----------------------------------------------------------------------------
  // Personal & Bio Information
  // ----------------------------------------------------------------------------
  personal: {
    name: "Varun Teja",
    tagline: "Student | Programmer | Cybersecurity Enthusiast | Hardware Enthusiast",
    heroIntro: "I'm a student passionate about coding, cybersecurity, digital editing, electrical hardware, and technology. I enjoy building projects, experimenting with new ideas, and continuously improving my technical skills.",
    aboutBio: "I am a student with a strong interest in technology and practical learning. I enjoy programming, ethical hacking and cybersecurity, digital editing, electrical and electronic hardware, and creating technical projects. My goal is to continuously learn new technologies and turn my ideas into useful projects.",
    email: "rahulteja2367@gmail.com",
    phone: "+91 8886132131",
    location: "India",
    status: "Diploma Student in CME (Computer Engineering)",
    roles: [
      { icon: "🎓", title: "Student", desc: "Pursuing CME Diploma with hands-on practical learning" },
      { icon: "💻", title: "Programmer", desc: "Writing clean code in Python and C to solve problems" },
      { icon: "🔐", title: "Cybersecurity Enthusiast", desc: "Exploring ethical hacking & networking in authorized environments" },
      { icon: "⚡", title: "Hardware Enthusiast", desc: "Tinkering with electronics, microchips, and circuits" },
      { icon: "🎨", title: "Digital Editor", desc: "Crafting visual media, graphic designs, and video edits" },
      { icon: "🚀", title: "Technology Learner", desc: "Constantly exploring new tech stacks and practical applications" }
    ]
  },

  // ----------------------------------------------------------------------------
  // Skills Categories (Presented as areas learning/practicing)
  // ----------------------------------------------------------------------------
  skills: [
    {
      id: "programming",
      title: "Programming & Coding",
      icon: "💻",
      accent: "#00f2fe",
      description: "Building foundational programming expertise, logic, and problem-solving through clean algorithms and scripting.",
      items: [
        { name: "Python", status: "Learning & Practicing", level: 75 },
        { name: "C", status: "Core Fundamentals", level: 70 },
        { name: "Basic programming", status: "Algorithms & Structures", level: 80 },
        { name: "Problem solving", status: "Analytical Thinking", level: 75 },
        { name: "Logical thinking", status: "System Design & Flow", level: 80 }
      ]
    },
    {
      id: "cybersecurity",
      title: "Cybersecurity",
      icon: "🔐",
      accent: "#a855f7",
      description: "Understanding network architecture, security vulnerabilities, and defensive principles within authorized labs.",
      items: [
        { name: "Ethical hacking", status: "Lab Experimentation", level: 65 },
        { name: "Cybersecurity fundamentals", status: "Core Concepts", level: 75 },
        { name: "Networking fundamentals", status: "TCP/IP & OSI Model", level: 70 },
        { name: "Security testing in authorized environments", status: "Hands-on Practice", level: 65 },
        { name: "Cybersecurity learning", status: "Continuous Research", level: 80 }
      ]
    },
    {
      id: "editing",
      title: "Digital Editing",
      icon: "🎨",
      accent: "#f59e0b",
      description: "Creating engaging digital media, creative graphic compositions, and high-impact video edits.",
      items: [
        { name: "Photo editing", status: "Color Grading & Touchups", level: 80 },
        { name: "Video editing", status: "Transitions & Visual Flow", level: 75 },
        { name: "Graphic design", status: "Layouts & Typography", level: 70 },
        { name: "Creative editing", status: "Effects & Aesthetics", level: 78 }
      ]
    },
    {
      id: "hardware",
      title: "Electrical & Hardware",
      icon: "⚡",
      accent: "#10b981",
      description: "Hands-on tinkering with electronics, circuit diagrams, testing equipment, and microcontrollers.",
      items: [
        { name: "Basic electronics", status: "Component Identification", level: 75 },
        { name: "Electrical hardware", status: "Wiring & Power Systems", level: 70 },
        { name: "Circuit experimentation", status: "Breadboard Prototyping", level: 72 },
        { name: "Hardware projects", status: "Microcontroller Builds", level: 68 },
        { name: "Troubleshooting fundamentals", status: "Multimeter & Diagnostics", level: 72 }
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // Projects Showcase
  // Categories: 'python', 'cybersecurity', 'hardware', 'editing', 'college'
  // ----------------------------------------------------------------------------
  projects: [
    {
      id: "proj-1",
      title: "Python Games Suite",
      category: "python",
      categoryLabel: "Python Projects",
      description: "Interactive arcade and terminal games built with Python, focusing on game loops, state management, and score tracking.",
      details: "A collection of engaging Python games including Snake, Pong, and text adventures. Features collision detection, keyboard event handling, custom difficulty settings, and persistent high-score leaderboards.",
      technologies: ["Python", "Pygame", "Algorithms", "OOP"],
      image: "assets/projects/python-games.svg",
      githubUrl: "https://github.com",
      demoUrl: "#",
      featured: true
    },
    {
      id: "proj-2",
      title: "Multi-Functional Calculator",
      category: "python",
      categoryLabel: "Python Projects",
      description: "A desktop scientific & arithmetic calculator with a clean UI, memory functions, and history logging.",
      details: "Built to perform both basic arithmetic operations and scientific functions (trigonometric, logarithmic, and power calculations). Features custom error handling for division by zero and invalid equations.",
      technologies: ["Python", "Tkinter / CustomTkinter", "Math Module"],
      image: "assets/projects/calculator.svg",
      githubUrl: "https://github.com",
      demoUrl: "#",
      featured: false
    },
    {
      id: "proj-3",
      title: "Number Guessing Game",
      category: "python",
      categoryLabel: "Python Projects",
      description: "A smart logic-based guessing game with adaptive hints, attempt tracking, and replay modes.",
      details: "Develops core programming concepts such as conditional statements, while loops, and pseudo-random number generation. Includes multiple difficulty tiers and user feedback metrics.",
      technologies: ["Python", "Logic Flow", "CLI / GUI"],
      image: "assets/projects/number-game.svg",
      githubUrl: "https://github.com",
      demoUrl: "#",
      featured: false
    },
    {
      id: "proj-4",
      title: "Student Result Management System",
      category: "python",
      categoryLabel: "Python Projects",
      description: "Automated student grade computation, report card generation, and record storage application.",
      details: "An academic tool for managing student profiles, inputting subject marks, computing GPA/percentages, and exporting digital report summaries with tabular data visualization.",
      technologies: ["Python", "File Handling", "Data Structures", "Tkinter"],
      image: "assets/projects/student-system.svg",
      githubUrl: "https://github.com",
      demoUrl: "#",
      featured: true
    },
    {
      id: "proj-5",
      title: "Cybersecurity Lab & Network Packet Analyzer",
      category: "cybersecurity",
      categoryLabel: "Cybersecurity Projects",
      description: "Authorized sandbox environment experimentation for packet inspection, port scanning, and traffic analysis.",
      details: "Conducted within isolated, authorized virtual machine labs (Kali Linux / Wireshark). Analyzes TCP three-way handshakes, ICMP ping requests, DNS lookups, and basic vulnerability mitigation techniques.",
      technologies: ["Wireshark", "Linux", "Networking (TCP/IP)", "Nmap (Authorized)"],
      image: "assets/projects/cyber-security.svg",
      githubUrl: "https://github.com",
      demoUrl: "#",
      featured: true
    },
    {
      id: "proj-6",
      title: "Authorized Security Audit & Vulnerability Testing",
      category: "cybersecurity",
      categoryLabel: "Cybersecurity Projects",
      description: "Practical assessment of basic security configurations, password hashing mechanisms, and safe authentication practices.",
      details: "Explores symmetric and asymmetric cryptographic concepts, salted hash verification, and OWASP top security awareness practices practiced purely in strictly authorized sandbox configurations.",
      technologies: ["Security Fundamentals", "Hashing Algorithms", "Authorized Labs"],
      image: "assets/projects/security-testing.svg",
      githubUrl: "https://github.com",
      demoUrl: "#",
      featured: false
    },
    {
      id: "proj-7",
      title: "Smart Circuit & Sensor Prototype",
      category: "hardware",
      categoryLabel: "Hardware Projects",
      description: "Breadboard-based circuit experimentation integrating light/motion sensors with automated LED indicators.",
      details: "Constructed using electronic components including resistors, capacitors, 555 timers, and photoresistors. Designed to monitor ambient conditions and trigger circuit responses with minimal current draw.",
      technologies: ["Electronics", "Circuits", "Sensors", "Hardware Prototyping"],
      image: "assets/projects/hardware-circuit.svg",
      githubUrl: "https://github.com",
      demoUrl: "#",
      featured: true
    },
    {
      id: "proj-8",
      title: "Microcontroller Hardware Automation",
      category: "hardware",
      categoryLabel: "Hardware Projects",
      description: "Experimental automated relay and motor controller setup using embedded micro-hardware.",
      details: "Explores digital I/O pins, pulse width modulation (PWM), and analog-to-digital conversion. Includes hardware safety fuses, breadboard wiring diagrams, and multimeter testing diagnostics.",
      technologies: ["Microcontrollers", "Embedded C", "Relays", "Multimeter Testing"],
      image: "assets/projects/hardware-relay.svg",
      githubUrl: "https://github.com",
      demoUrl: "#",
      featured: false
    },
    {
      id: "proj-9",
      title: "Cyber-Tech Visual & Brand Design Suite",
      category: "editing",
      categoryLabel: "Editing Projects",
      description: "Digital posters, glowing typography graphics, and cyber-themed visual identity design.",
      details: "Created with professional graphic design software utilizing layer blending modes, neon glow aesthetics, futuristic cyberpunk color palettes, and typographic hierarchy for digital media.",
      technologies: ["Photoshop", "Graphic Design", "Typography", "Visual Branding"],
      image: "assets/projects/editing-design.svg",
      githubUrl: "#",
      demoUrl: "#",
      featured: false
    },
    {
      id: "proj-10",
      title: "Cinematic Video Edit & Motion Showcase",
      category: "editing",
      categoryLabel: "Editing Projects",
      description: "Rhythm-synced video transitions, speed ramps, and color-graded clips for digital media.",
      details: "Crafted through multi-track timeline editing, audio waveform synchronization, motion tracking, and color grading LUTs to deliver dynamic, high-energy video sequences.",
      technologies: ["Video Editing", "Color Grading", "Sound Design", "Motion Effects"],
      image: "assets/projects/editing-video.svg",
      githubUrl: "#",
      demoUrl: "#",
      featured: true
    },
    {
      id: "proj-11",
      title: "CME Diploma Academic Mini-Project",
      category: "college",
      categoryLabel: "College Projects",
      description: "Comprehensive computer hardware architecture and operating system scheduling simulator.",
      details: "Developed as part of the Diploma CME coursework. Explores CPU scheduling algorithms (FIFO, Round Robin), memory allocation partitions, and underlying computing hardware organization.",
      technologies: ["C Programming", "Computer Architecture", "OS Fundamentals"],
      image: "assets/projects/college-cme.svg",
      githubUrl: "https://github.com",
      demoUrl: "#",
      featured: true
    }
  ],

  // ----------------------------------------------------------------------------
  // Project Photo Gallery
  // Categories: 'coding', 'cybersecurity', 'hardware', 'editing', 'college'
  // ----------------------------------------------------------------------------
  gallery: [
    {
      id: "gal-1",
      title: "Python Logic & Terminal Setup",
      category: "coding",
      categoryLabel: "Coding",
      description: "Developing automated scripts and algorithm testers inside a customized terminal environment.",
      image: "assets/gallery/coding-setup.svg"
    },
    {
      id: "gal-2",
      title: "Authorized Security Lab Topology",
      category: "cybersecurity",
      categoryLabel: "Cybersecurity",
      description: "Configuring isolated virtual machines for network security monitoring and packet inspection.",
      image: "assets/gallery/cyber-lab.svg"
    },
    {
      id: "gal-3",
      title: "Electronics Circuit Breadboard",
      category: "hardware",
      categoryLabel: "Hardware",
      description: "Testing component voltage drops and resistor networks using a digital multimeter.",
      image: "assets/gallery/hardware-bench.svg"
    },
    {
      id: "gal-4",
      title: "Digital Art & Cyberpunk Composition",
      category: "editing",
      categoryLabel: "Editing",
      description: "Multi-layered digital photo manipulation showcasing neon glowing gradients and high contrast visuals.",
      image: "assets/gallery/editing-art.svg"
    },
    {
      id: "gal-5",
      title: "CME Computer Engineering Lab Workshop",
      category: "college",
      categoryLabel: "College Projects",
      description: "Hands-on assembly of computer hardware peripherals and motherboard diagnostic sessions.",
      image: "assets/gallery/college-lab.svg"
    },
    {
      id: "gal-6",
      title: "Algorithmic Code Structure in C",
      category: "coding",
      categoryLabel: "Coding",
      description: "Writing pointers, memory structures, and data handling routines in standard C.",
      image: "assets/gallery/coding-c.svg"
    },
    {
      id: "gal-7",
      title: "Microcontroller Circuit Wiring",
      category: "hardware",
      categoryLabel: "Hardware",
      description: "Connecting sensor modules with logic jumpers and power distribution boards.",
      image: "assets/gallery/hardware-wiring.svg"
    },
    {
      id: "gal-8",
      title: "Video Motion Graphics Timeline",
      category: "editing",
      categoryLabel: "Editing",
      description: "Keyframe animation, beat-sync audio markers, and dynamic transition cuts.",
      image: "assets/gallery/editing-timeline.svg"
    }
  ],

  // ----------------------------------------------------------------------------
  // Education Information
  // ----------------------------------------------------------------------------
  education: [
    {
      statusBadge: "Current Education",
      degree: "Diploma in Computer Engineering (CME)",
      institution: "State Technical Board / Polytechnic Institute",
      academicYear: "2024 - Present",
      description: "Focused on core computing fundamentals, hardware architecture, programming methodologies, and networking systems.",
      subjects: [
        "Programming in C & Python",
        "Computer Architecture & Hardware",
        "Operating Systems Fundamentals",
        "Data Communications & Computer Networks",
        "Digital Electronics & Logic Design",
        "Database Management Fundamentals"
      ],
      certifications: [
        "In progress: Cybersecurity Fundamentals & Network Defense",
        "In progress: Advanced Python Programming Practicum"
      ]
    },
    {
      statusBadge: "Secondary Education",
      degree: "Secondary School Certificate (SSC)",
      institution: "High School Board of Secondary Education",
      academicYear: "Completed",
      description: "Developed strong foundational interest in science, mathematics, computer applications, and analytical reasoning.",
      subjects: [
        "Mathematics",
        "Physical Science",
        "Computer Fundamentals",
        "English Communication"
      ],
      certifications: [
        "School Science & Tech Exhibition Participant"
      ]
    }
  ],

  // ----------------------------------------------------------------------------
  // Achievements & Certifications
  // ----------------------------------------------------------------------------
  achievements: [
    {
      id: "ach-1",
      title: "Foundational Cybersecurity Workshop",
      issuer: "Authorized Tech Workshop",
      date: "2025",
      type: "Workshop",
      description: "Completed intensive practical training in network defense, packet analysis fundamentals, and ethical hacking guidelines.",
      image: "assets/achievements/cert-cyber.svg"
    },
    {
      id: "ach-2",
      title: "Python Programming Foundations",
      issuer: "Technical Education Practicum",
      date: "2025",
      type: "Coding",
      description: "Demonstrated proficiency in Python data structures, algorithms, modular coding, and object-oriented paradigms.",
      image: "assets/achievements/cert-python.svg"
    },
    {
      id: "ach-3",
      title: "Hardware & Electronics Prototyping",
      issuer: "Diploma Academic Exhibition",
      date: "2025",
      type: "College",
      description: "Recognized for building functional breadboard circuit prototypes and demonstrating electronic troubleshooting.",
      image: "assets/achievements/cert-hardware.svg"
    }
  ],

  // ----------------------------------------------------------------------------
  // What I Do (6 Futuristic Cards)
  // ----------------------------------------------------------------------------
  whatIDo: [
    {
      icon: "💻",
      title: "Coding",
      desc: "Building programs and learning different programming concepts.",
      color: "#00f2fe"
    },
    {
      icon: "🔐",
      title: "Cybersecurity",
      desc: "Learning ethical hacking, networking, and cybersecurity concepts in authorized environments.",
      color: "#a855f7"
    },
    {
      icon: "⚡",
      title: "Hardware",
      desc: "Experimenting with electronics, electrical hardware, and circuits.",
      color: "#10b981"
    },
    {
      icon: "🎨",
      title: "Editing",
      desc: "Creating and editing digital content.",
      color: "#f59e0b"
    },
    {
      icon: "🧪",
      title: "Experimenting",
      desc: "Trying new technologies and turning ideas into practical projects.",
      color: "#ec4899"
    },
    {
      icon: "🚀",
      title: "Learning",
      desc: "Continuously developing new technical skills.",
      color: "#38bdf8"
    }
  ],

  // ----------------------------------------------------------------------------
  // My Interests (Animated Icons Grid)
  // ----------------------------------------------------------------------------
  interests: [
    { icon: "💻", name: "Programming", glow: "#00f2fe" },
    { icon: "🔐", name: "Cybersecurity", glow: "#a855f7" },
    { icon: "🛡️", name: "Ethical Hacking", glow: "#818cf8" },
    { icon: "🔌", name: "Electronics", glow: "#10b981" },
    { icon: "⚡", name: "Electrical Hardware", glow: "#34d399" },
    { icon: "🤖", name: "Technology", glow: "#06b6d4" },
    { icon: "🎨", name: "Digital Editing", glow: "#f59e0b" },
    { icon: "🎮", name: "Gaming", glow: "#ec4899" },
    { icon: "📚", name: "Learning New Things", glow: "#6366f1" },
    { icon: "🛠️", name: "Building Projects", glow: "#00f2fe" }
  ],

  // ----------------------------------------------------------------------------
  // Social Media Links
  // ----------------------------------------------------------------------------
  socials: [
    {
      platform: "Instagram",
      username: "@ft.varunnz",
      url: "https://instagram.com/ft.varunnz",
      icon: "instagram",
      description: "Follow my personal updates, creative stories, and tech moments.",
      color: "#e1306c",
      buttonText: "Visit Instagram"
    },
    {
      platform: "Snapchat",
      username: "teja_rocz",
      url: "https://www.snapchat.com/add/teja_rocz",
      icon: "snapchat",
      description: "Connect on Snapchat for daily tech streaks and snapshots.",
      color: "#fffc00",
      buttonText: "Add on Snapchat"
    },
    {
      platform: "YouTube",
      username: "My YouTube Channel",
      url: "https://www.youtube.com/@varunteja", // Placeholder URL that can be replaced anytime
      icon: "youtube",
      description: "Watch project demonstrations, tech walkthroughs, and tutorials.",
      color: "#ff0000",
      buttonText: "Subscribe on YouTube"
    }
  ]
};

// Export to window for vanilla browser compatibility
if (typeof window !== "undefined") {
  window.PORTFOLIO_DATA = PORTFOLIO_DATA;
}
