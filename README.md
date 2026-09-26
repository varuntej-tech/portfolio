# ⚡ Varun Teja - Futuristic Personal Portfolio Website

A modern, dark glassmorphism personal technology portfolio built for **Varun Teja** (Student, Programmer, Cybersecurity Enthusiast, Hardware Enthusiast).

---

## 🚀 Quick Start

### 1. View Locally
Simply double-click [`index.html`](index.html) to open the portfolio directly in any modern web browser (Chrome, Edge, Firefox, Safari).

Alternatively, run a simple local web server:
```bash
# Using Python
python -m http.server 3000
# Then open http://localhost:3000 in your browser
```

### 2. Free 1-Click Hosting (GitHub Pages / Vercel / Netlify)
- **GitHub Pages**: Push this repository to GitHub, go to **Settings → Pages**, and select the `main` branch.
- **Vercel / Netlify**: Connect your GitHub repository or drag-and-drop this folder for instant SSL hosting.

---

## 🛠️ How to Customize & Add Content

All portfolio content is centralized inside **[`js/data.js`](js/data.js)**. You do **not** need to edit complicated HTML to change text, add projects, or update photos!

### 1. Adding a New Project
Open `js/data.js` and add an object to the `projects` array:
```javascript
{
  id: "my-new-project",
  title: "My New Project Title",
  category: "python", // Options: 'python', 'cybersecurity', 'hardware', 'editing', 'college'
  categoryLabel: "Python Projects",
  description: "Short summary of what the project does.",
  details: "Full description shown in the 'View Details' modal popup.",
  technologies: ["Python", "SQLite", "API"],
  image: "assets/projects/your-image.png", // or any image URL
  githubUrl: "https://github.com/your-username/your-repo",
  demoUrl: "https://your-live-demo-link.com",
  featured: true
}
```

### 2. Adding a Photo to the Project Gallery
Add an object to the `gallery` array in `js/data.js`:
```javascript
{
  id: "gal-custom-1",
  title: "Hardware Circuit Build",
  category: "hardware", // Options: 'coding', 'cybersecurity', 'hardware', 'editing', 'college'
  categoryLabel: "Hardware",
  description: "Testing breadboard sensors and multimeter readings.",
  image: "assets/gallery/your-photo.jpg"
}
```
*Tip: You can also use the interactive **"Add Project Photo"** button directly in the browser gallery section for instant previews!*

### 3. Updating Social Media & YouTube Links
In `js/data.js`:
- **Instagram**: Update `username` and `url` (`@ft.varunnz`).
- **Snapchat**: Update `username` and `url` (`teja_rocz`).
- **YouTube**: Replace `"https://www.youtube.com/@varunteja"` with your actual YouTube channel URL.

### 4. Updating Contact Details
In `js/data.js`:
- Email: `rahulteja2367@gmail.com`
- Phone: `+91 8886132131`

---

## 📂 Project Structure

```
c:/PORTFILIO/
├── index.html              # Main HTML markup with 18 distinct sections
├── README.md               # Documentation and customization guide
├── css/
│   ├── style.css           # Glassmorphism tokens, reset, typography, ambient glows
│   └── components.css      # Component styling (Navbar, Hero, Modals, Timeline, Forms)
├── js/
│   ├── data.js             # Central data configuration (Projects, Gallery, Skills, Links)
│   ├── particles.js        # High-performance canvas particle constellation
│   └── main.js             # Dynamic rendering, lightbox, filters, form handler
└── assets/
    ├── projects/           # High-tech SVG graphics for projects
    ├── gallery/            # Gallery photo illustrations & logs
    └── achievements/       # Certificate badges and preview graphics
```

---

## 🌟 Included Sections (All 18 Requirements)
1. **Navigation Bar**: Sticky glassmorphic navbar with active indicator, mobile hamburger menu, quick Connect CTA.
2. **Hero Section**: High-impact branding, dynamic typewriter effect for roles, bio quote, CTAs, and interactive holographic tech core.
3. **About Me**: Narrative statement, quick academic stream tags, and 6 identity cards (Student, Programmer, Cybersecurity, Hardware, Digital Editor, Technology Learner).
4. **Skills Matrix**: 4 glassmorphism panels (Programming & Coding, Cybersecurity, Digital Editing, Electrical & Hardware) with realistic learning status badges.
5. **Projects Showcase**: Filter tabs (Python, Cybersecurity, Hardware, Editing, College), cards with GitHub, Live Demo, and "View Details" popup modals.
6. **Project Photo Gallery**: Category-filtered grid, zoom hover animation, full-screen lightbox with previous/next controls, and an "Add Photo" interactive helper.
7. **Education Timeline**: Futuristic rail for Diploma in Computer Engineering (CME), subjects, and coursework.
8. **Achievements & Certifications**: Cards with certificate previews and the "More achievements coming soon..." banner.
9. **What I Do**: 6 futuristic cards (Coding, Cybersecurity, Hardware, Editing, Experimenting, Learning).
10. **My Interests**: 10 interactive glassmorphic cards with glowing animated icons.
11. **Social Media Showcase**: Dedicated branded cards for Instagram, Snapchat, and YouTube.
12. **Contact Me**: Clickable Email and Phone links with copy-to-clipboard buttons, and a glassmorphic contact form with feedback alerts.
13. **Footer**: Taglines, nav links, social icons, and copyright © 2026 Varun Teja.
14-18. **Aesthetics, Animations, Responsiveness, and Clean Maintainability**.

---
© 2026 Varun Teja. All rights reserved.
