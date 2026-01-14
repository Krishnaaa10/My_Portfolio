# 🚀 MERN Stack Developer Portfolio

A modern, high-performance personal portfolio website designed to showcase full-stack development skills, certifications, and projects. Built with a focus on **premium aesthetics**, **smooth interactions**, and **clean code**.



## 🛠️ Tech Stack

This project uses a lightweight, dependency-free approach for maximum performance, utilizing industry-standard libraries only where necessary for advanced animations.

-   **Core**:
    -   **HTML5**: Semantic structure for SEO and accessibility.
    -   **CSS3**: Modern CSS features including CSS Variables (`:root`), Flexbox, CSS Grid, and Backdrop Filter (Glassmorphism).
    -   **JavaScript (ES6+)**: Modular vanilla JavaScript for logic and DOM manipulation.

-   **Libraries & Dependencies**:
    -   **[GSAP (GreenSock Animation Platform)](https://greensock.com/)**: Used for complex, high-performance animations (Hero fade-ins, stagger effects).
    -   **[ScrollTrigger](https://greensock.com/scrolltrigger/)**: A GSAP plugin that triggers animations based on scroll position (Skills marquee, Sections appearing).
    -   **[FontAwesome 6](https://fontawesome.com/)**: For scalable vector icons (Socials, UI elements, Tech stack icons).
    -   **Google Fonts**: `Outfit` (Headings) and `Inter` (Body) for modern typography.

## ✨ Key Features

### 1. 🎨 Design System ("Dark Tech")
-   **Theme**: Deep Obsidian Black (`#050507`) background with "Aurora" accents (Electric Purple `#7C3AED` to Teal `#2DD4BF`).
-   **Glassmorphism**: Translucent cards with `backdrop-filter: blur()` effects on the Navbar, Certifications, and Contact section.
-   **Typography**: carefully scaled type hierarchy using modern sans-serif fonts.

### 2. ⚡ Advanced Animations
-   **Hero Section**: Staggered text entry and a 3D-tilting code card that responds to mouse movement.
-   **Scroll Impressions**: Sections fade in and slide up gracefully as the user scrolls (`ScrollTrigger`).
-   **Magnetic Cursor**: A custom javascript cursor that trails navigation and expands when hovering over interactive elements.
-   **Skills Marquee**: An infinite scrolling loop displaying technical skills.

### 3. 📜 Interactive Certifications
-   **Filtering System**: Users can filter certifications by category (Cloud, AI, Security, etc.) using JavaScript-driven DOM manipulation.
-   **Modal Preview**: Clicking a certification opens a high-fidelity modal with a blurred backdrop and detailed view.

### 4. 📱 Responsive & Performant
-   **Mobile First**: Fully responsive layout that adapts to Mobile, Tablet, and Desktop screens.
-   **Performance**:
    -   Use of `will-change` properties to hint compositing layers to the browser.
    -   Efficient event listeners and debounced scroll handlers.
    -   Optimized asset loading.

## 📂 Project Structure

```text
/MERN Portfolio
│
├── index.html          # Main HTML entry point (Semantic Structure)
├── style.css           # Global Styles (Variables, Animations, Layouts)
├── script.js           # Logic (GSAP Animations, filtering, interactions)
├── /Images             # Optimized assets (Project screenshots, Certs)
│   ├── handshake.webp  # Contact section background
│   └── ...
└── README.md           # Project Documentation
```

## 🚀 How to Run

Since this is a static site (HTML/CSS/JS), it requires no backend server setup.

1.  **Clone the repository** (or download files).
2.  **Open `index.html`** in any modern browser (Chrome, Edge, Firefox, Safari).
3.  **Optional**: For the best development experience, use VS Code with the "Live Server" extension.

---

&copy; 2025 Shrikrishna Patel. Designed & Built with ❤️.
