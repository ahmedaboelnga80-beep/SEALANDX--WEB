# SeaLandX Cinematic Web Experience

A production-ready, highly aesthetic cinematic single-page web experience for **SeaLandX** (Premium Container Inspection & Maritime Logistics). Designed with a dark industrial cyber-logistics aesthetic, featuring scroll-bound stock video frame scrubbing, a custom Canvas particle scan effect, smooth momentum scrolling, and complete bilingual translation (English/Arabic).

---

## 🚀 Setup and Running Locally

Because the local environment does not require complex node build dependencies, this project is built as a pure ESM static web application. It can be served using any local static web server.

### Option 1: Python Static Server (Recommended)
Since Python is pre-installed on standard machines, you can launch the site in one command:
```powershell
python -m http.server 8000
```
Then open your browser and navigate to:
```
http://localhost:8000
```

### Option 2: Live Server in VS Code
If you are using VS Code, right-click `index.html` and select **Open with Live Server**.

---

## 🎮 Navigation and Controls

The website is interactive and responsive. Controls are mapped as follows:

### 1. Scroll-Bound Video Scrubbing (Desktop/Muted)
*   As you scroll down the page, the browser locks (pins) each visual stage.
*   **Scrolling Down** scrubs the H.264 video forward.
*   **Scrolling Up** reverses the video frames seamlessly.
*   *Note: In systems where "Reduced Motion" is enabled, scroll-scrubbing is disabled, and clean static fallback images are presented instead for accessibility.*

### 2. Canvas Rupture Particle Scan (Chapter 5)
*   **Scroll progress** controls the molecular scan dispersion. As you scroll down, the container lattice coordinates disintegrate into floating particles.
*   **Mouse movement** acts as a magnetic force field, repelling/attracting particles when hovered.

### 3. Bilingual Toggle
*   Click the **العربية / English** button in the header to hot-reload translations.
*   Full RTL/LTR direction shifts are handled dynamically in pure CSS.

### 4. Autoplay Demo Mode (`?demo=1`)
To run the website in an automated presentation mode (e.g. for screenings or displays):
*   Append `?demo=1` to the URL: `http://localhost:8000/?demo=1`
*   The page will **auto-scroll** at a uniform pace from top to bottom over 15 seconds.
*   **Space Bar**: Play / Pause the auto-scroll.
*   **R Key**: Reset scroll position back to the beginning.
*   **Mouse Scroll / Touch Drag / Mouse Click**: Pauses autoplay immediately to allow manual control.

---

## 📦 File Structure

*   `index.html`: Core markup, CDNs (GSAP, ScrollTrigger, Lenis), and sections (Chapters 1-7).
*   `css/styles.css`: Rewritten design system, cyber-logistics variables, pinned layouts, RTL, and media queries.
*   `js/main.js`: Main logic, Lenis configuration, ScrollTrigger scrubbers, Canvas particles, translations database, and demo mode.
*   `assets/video/`: Optimized H.264 videos (compressed via FFmpeg for high-speed seeking).
*   `assets/images/`: Standard logos, certs, and first-frame poster fallbacks.
*   `RESEARCH.md`: Visual research notes and creative direction parameters.
*   `ASSET-LICENSES.md`: Asset names, creators, and licensing terms (Pexels Free License).
*   `.gitignore`: Excludes raw heavy files and setup scripts.

---

## 📝 Credits & Licensing

All stock videos and images are sourced under the **Pexels Free License** (Free to use, no attribution required). For detailed author and link logs, see [ASSET-LICENSES.md](ASSET-LICENSES.md).
