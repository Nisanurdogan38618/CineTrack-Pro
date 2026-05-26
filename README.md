# 🎬 CineTrack Pro - IMDb Top 20 Watchlist

CineTrack Pro is a modern, responsive **React/Frontend** web application where users can explore popular and cult movies, curate their personal Watchlist, and keep track of their viewing history.

This project was developed as a comprehensive frontend showcase, demonstrating clean architecture, component state isolation, and intuitive CRUD capabilities.

---

## 🚀 Features & CRUD Operations

The application fully implements the foundational **CRUD (Create, Read, Update, Delete)** operations required for an interactive user experience:

* **List Movies (Read):** Users are greeted with a curated selection of 20 legendary IMDb movies on the main dashboard, featuring high-quality localized posters, titles, and release years.
* **Search & Live Filter (Read):** An interactive search bar allows users to filter the entire 20-movie database by titles or keywords instantly as they type.
* **Add to Watchlist (Create):** Clicking "Add to My List" dynamically injects the chosen movie into the user's personal side-panel watchlist. Duplicate entries are blocked with a notification.
* **Toggle Viewing Status (Update):** Movies in the personal list feature a toggle button. When marked as "Watched", the layout dynamically strikes through the title and lowers the card's opacity to maintain an elegant visual hierarchy.
* **Remove from List (Delete):** A dedicated "Remove" button allows users to wipe an individual movie off their personal watchlist instantly.
* **Persistent Storage (Local Storage):** The state of the custom watchlist is continuously synchronized with the browser's Local Storage API. The user's list remains perfectly intact even after refreshing the page or closing the browser.

---

## 🎨 UI/UX & Design Architecture

* **Tailwind CSS Grid & Flexbox:** Styled with a sleek, cinematic dark theme (`Slate-950`). The layout adapts fluidly across mobile, tablet, and ultra-wide monitor screens.
* **Local Asset Optimization:** To bypass external server errors or content restrictions (`CORS / Mixed Content Blocks`), all film posters have been optimized and are hosted locally under the asset pipeline.

---

## 📂 Project Directory Structure

The repository is cleanly structured following modern React conventions:

```text
watchlist/
├── src/
│   ├── assets/           # Localized film poster assets (.jpg, .png, .svg)
│   ├── App.jsx           # Main component driving state management and CRUD logic
│   ├── main.jsx          # React DOM initialization and root rendering
│   └── index.css         # Main stylesheet integrating Tailwind directives
├── index.html            # Core HTML document
├── package.json          # Project metadata, dependencies, and execution scripts
└── README.md             # Project documentation
