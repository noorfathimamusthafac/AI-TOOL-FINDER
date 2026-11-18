# AI Tool Finder - Discover the Right AI Tool

[![Live Demo](https://img.shields.io/badge/demo-online-brightgreen.svg)](https://noorfathimamusthafac.github.io/AI-TOOL-FINDER/)
[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)
[![Zero Dependencies](https://img.shields.io/badge/dependencies-none-orange.svg)](#)

A modern, responsive, and vibrant web application to help creators, developers, students, and professionals discover, filter, search, and bookmark top AI tools across chatbots, coding, writing, research, image, and video generation.

---

## 🌐 Live Website

- **Production URL**: [https://noorfathimamusthafac.github.io/AI-TOOL-FINDER/](https://noorfathimamusthafac.github.io/AI-TOOL-FINDER/)
- **Source Code**: [https://github.com/noorfathimamusthafac/AI-TOOL-FINDER](https://github.com/noorfathimamusthafac/AI-TOOL-FINDER)

---

## 🌟 Key Features

- **Standard Modern Dashboard**: Clean professional layout with zero emojis, clean SVG iconography, and balanced typography.
- **Vibrant Color Palette**: Bright energetic gradients (electric indigo, luminous cyan, vivid fuchsia, mint emerald) with high-contrast light and luminous dark modes.
- **Comprehensive 24+ AI Directory**: Curated tools including ChatGPT, Claude, Gemini, Perplexity, Cursor, v0, GitHub Copilot, Runway, Sora, Midjourney, Stable Diffusion, ElevenLabs, and more.
- **Smart Search & Match Highlighting**: Real-time keyword search with visual text match highlighting in tool names and descriptions.
- **Keyboard Shortcuts**: Press `/` or `Ctrl + K` to jump to search instantly; press `Escape` to clear.
- **Category Filter Pills with Live Badges**: Instant filtering across Coding, AI Chatbots, Writing, Research, Image Generation, Video Generation, and Productivity with live tool counts.
- **Simplified Pricing Models**: Clear badges for **Free** and **Paid** tiers with dedicated dropdown filter.
- **Persistent Favorites with Toast Alerts**: Bookmark tools to `localStorage` with a single click and receive subtle confirmation toasts.
- **Fully Responsive**: Optimized for desktop monitors, tablets (2-column layout), and mobile devices (1-column layout with horizontal touch scrolling).
- **Zero External Dependencies**: 100% vanilla HTML5, CSS3, and JavaScript — no build steps or bundlers required.

---

## 🛠️ Technology Stack

- **HTML5**: Semantic and accessible markup.
- **CSS3**: CSS Custom Properties (Variables), Flexbox, CSS Grid, and custom transitions.
- **Vanilla JavaScript (ES6+)**: Modular application state, dynamic DOM rendering, and event delegation.
- **JSON**: Structured storage of AI tools metadata in `data/tools.json`.
- **LocalStorage API**: Client-side persistence for theme selection and bookmarked favorites.

---

## 📁 Project Structure

```text
ai-tool-finder/
├── index.html        # Main landing page markup & structure
├── style.css         # Vibrant design system, responsive styles, & themes
├── script.js         # Core application logic, search, filters & LocalStorage
├── data/
│   └── tools.json    # Curated AI tools dataset (24+ entries)
├── README.md         # Comprehensive project documentation
└── .gitignore        # Git exclusion rules
```

---

## 🚀 How to Run Locally

You can run this project locally without any complex installation:

### Method 1: Direct File Preview
Double-click `index.html` to open it directly in your default web browser (Chrome, Edge, Firefox, Safari).

### Method 2: Python Local Server
```bash
git clone https://github.com/noorfathimamusthafac/AI-TOOL-FINDER.git
cd AI-TOOL-FINDER
python -m http.server 8000
```
Then navigate to `http://localhost:8000` in your web browser.

### Method 3: VS Code Live Server
1. Open the project folder in Visual Studio Code.
2. Install the **Live Server** extension.
3. Right-click `index.html` and choose **Open with Live Server**.

---

## 📅 Completed Contribution Roadmap

| Step | Feature Description | Status | Git Commit Message |
| :---: | :--- | :---: | :--- |
| **1** | **Initial project setup & Theme Toggle** | ✅ Completed | `Initial project setup` |
| **2** | **Responsive homepage layout & Hero UI** | ✅ Completed | `Add responsive homepage layout` |
| **3** | **AI tools dataset (24+ tools, Free/Paid)** | ✅ Completed | `Add AI tools dataset` |
| **4** | **Real-time search & keyboard shortcuts** | ✅ Completed | `Implement search functionality` |
| **5** | **Category filtering & dynamic count badges** | ✅ Completed | `Add category filtering` |
| **6** | **Favorites bookmarking & toast notifications** | ✅ Completed | `Implement favourites feature` |
| **7** | **Responsive design & mobile UX polish** | ✅ Completed | `Improve responsive design` |
| **8** | **Project documentation & live deployment** | ✅ Completed | `Update project documentation` |

---

## 🔮 Future Improvements

- [ ] Community submission form for new AI tools.
- [ ] Side-by-side tool comparison feature.
- [ ] User ratings and comments section.
- [ ] Export/import bookmarked tools as a JSON file.

---

## 📄 License

This project is open-source and free to use under the MIT License.
