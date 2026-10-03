# ⚡ Techtej | Varun Teja - Portfolio Website

A modern, dark cyber-glassmorphism personal technology portfolio built for **Varun Teja** (Web Developer, Vibe Coder, Ethical Hacker).

---

## 🚀 Quick Start

### 1. View Locally
Run a simple local web server from this directory:
```bash
# Using Python
python -m http.server 3000
# Then open http://localhost:3000 in your browser
```

### 2. Free 1-Click Hosting (GitHub Pages)
- **GitHub Pages**: Push this repository to GitHub, go to **Settings → Pages**, and select the `main` branch.
- Live URL format: `https://varuntej-tech.github.io/portfolio/`

---

## 🛠️ How to Customize & Add Content

All portfolio content is centralized inside **[`js/data.js`](js/data.js)**. You do **not** need to edit complicated HTML to change text, add projects, or update skills!

### 1. Updating Contact Details
In `js/data.js` and `index.html`:
- **Email**: `9477143@gmail.com`
- **Formspree**: Replace `YOUR_FORMSPREE_ID` with your actual Formspree form ID to receive messages directly in your inbox.

### 2. Updating Social Media Links
In `js/data.js` and `index.html`:
- **GitHub**: Replace `YOUR_USERNAME` with your GitHub username.
- **LinkedIn**: Replace `YOUR_USERNAME` with your LinkedIn handle.
- **Instagram**: Update `username` and `url` (`@ft.varunnz`).
- **YouTube**: Update with your channel URL.

### 3. Adding a New Project
Open `js/data.js` and add an object to the `projects` array:
```javascript
{
  id: "my-new-project",
  title: "My New Project Title",
  category: "web", // Options: 'web', 'vibe-coding', 'ethical-hacking'
  categoryLabel: "Web Development",
  description: "Short summary of what the project does.",
  details: "Full description shown in the 'View Details' modal popup.",
  technologies: ["HTML5", "CSS3", "JavaScript"],
  image: "assets/projects/calculator.svg",
  githubUrl: "https://github.com/your-username/your-repo",
  demoUrl: "https://your-live-demo-link.com",
  featured: true
}
```

---

## 📂 Project Structure

```
c:/PORTFILIO/
├── index.html              # Main HTML markup
├── README.md               # Documentation and customization guide
├── resume.pdf              # Downloadable resume document
├── images/
│   └── varun.jpg           # Circular profile photo
├── css/
│   ├── style.css           # Glassmorphism tokens, reset, typography, ambient glows
│   └── components.css      # Component styling (Navbar, Hero, Modals, Timeline, HUD)
├── js/
│   ├── data.js             # Central data configuration (Projects, Skills, Links)
│   ├── three.min.js        # Three.js 3D WebGL Library (Offline support)
│   ├── three-scene.js      # 3D Cyber Particle Tunnel & Camera Scrollytelling
│   ├── illusion-fx.js      # 3D Tilt, Click Shockwave, Cyber HUD Cursor, Audio FX
│   ├── particles.js        # HTML5 Canvas 2D particle constellation
│   └── main.js             # Dynamic rendering, filters, Formspree form handler
└── assets/
    └── projects/           # High-tech SVG graphics for project cards
```

---

## 🌟 Included Sections
1. **Navigation Bar**: Sticky glassmorphic navbar with active indicator, mobile hamburger menu, Connect CTA.
2. **Hero Section**: Circular profile photo with soft pink glow and floating badges (Web Developer, Vibe Coder, Ethical Hacker), bio statement, and Resume Download button.
3. **About Me**: Narrative statement, smaller profile photo, and 3 identity cards.
4. **What I Do**: 3 futuristic capability cards for the core skill set.
5. **Technical Skills**: 3 focused skill matrix panels with interactive practice status badges.
6. **Projects Showcase**: Filter tabs (Web Development, Vibe Coding, Ethical Hacking), cards with GitHub and "View Details" modal.
7. **Education Timeline**: Academic rail for Computer Engineering diploma, coursework, and milestones.
8. **Contact Me**: Direct Email with copy-to-clipboard button and a glassmorphic Formspree contact form.
9. **Footer**: Taglines, nav links, social icons (GitHub, LinkedIn, Instagram, YouTube), and copyright.

---
© 2026 Techtej (Varun Teja). All rights reserved.
