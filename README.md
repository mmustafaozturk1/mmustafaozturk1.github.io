# Data Analyst & BI Developer Portfolio

Welcome to the source code for my personal portfolio website. This project is a modern, responsive single-page application built with React and TypeScript, designed to showcase my skills, projects, and experience as a Data Analyst and Business Intelligence Developer.

**➡️ Live Demo: [https://mmustafaozturk1.github.io/](https://mmustafaozturk1.github.io/)**

<!-- *(Not: Bu görüntünün görünmesi için projenizin ana dalına `portfolio-screenshot.png` adında bir ekran görüntüsü eklemeniz gerekmektedir.)* -->
![Portfolio Screenshot](https://raw.githubusercontent.com/mmustafaozturk1/mmustafaozturk1.github.io/main/portfolio-screenshot.png) 

---

## 🚀 Features

*   **Interactive Project Showcase:** A dedicated section to display my data analysis and BI projects, with detailed descriptions, technologies used, and embedded, interactive Power BI dashboards.
*   **Comprehensive Resume Page:** A detailed "About Me" section that serves as a dynamic online resume, outlining my professional summary, work experience, skills, education, and achievements.
*   **Clean & Modern UI:** A sleek, dark-themed design inspired by modern developer portfolios, built with Tailwind CSS for a fully responsive and mobile-first experience.
*   **Smooth Animations:** Subtle animations and transitions to enhance user experience and engagement.
*   **Built with Modern Tech:** Leverages a modern frontend stack including React, TypeScript, and Vite for a fast and efficient development experience.
*   **Automated Deployment:** Deployed on GitHub Pages with a simple command, thanks to the `gh-pages` package.

---

## 🛠️ Technologies Used

This project was built using a range of modern frontend technologies:

*   **Core Framework:** [React](https://reactjs.org/)
*   **Language:** [TypeScript](https://www.typescriptlang.org/)
*   **Styling:** [Tailwind CSS](https://tailwindcss.com/)
*   **Routing:** [React Router](https://reactrouter.com/)
*   **Build Tool:** [Vite](https://vitejs.dev/)
*   **Deployment:** [GitHub Pages](https://pages.github.com/) & [gh-pages](https://www.npmjs.com/package/gh-pages)

---

## 🔧 Getting Started & Local Development

To run this project on your local machine, follow these steps:

### Prerequisites

Make sure you have [Node.js](https://nodejs.org/) (which includes npm) installed on your system.

### Installation & Setup

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/mmustafaozturk1/mmustafaozturk1.github.io.git
    ```

2.  **Navigate to the project directory:**
    ```bash
    cd mmustafaozturk1.github.io
    ```

3.  **Install the dependencies:**
    ```bash
    npm install
    ```

4.  **Run the development server:**
    ```bash
    npm run dev
    ```
    This will start the Vite development server. You can view the project by opening `http://localhost:5173` (or the port specified in the terminal) in your browser.

---

## 🚢 Deployment

This site is automatically deployed to GitHub Pages. The `package.json` file is configured with a `deploy` script that handles the entire process.

To deploy any changes, simply run:
```bash
npm run deploy

This command first builds the application for production (creating a dist folder) and then pushes the contents of that folder to the gh-pages branch of the repository, which is the branch being served by GitHub Pages.
📂 Project Structure
The project is organized with a clear and scalable structure:

/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable React components (Header, Footer, Cards, etc.)
│   ├── data/             # Static data for projects and blog posts
│   ├── pages/            # Top-level page components (HomePage, AboutPage, etc.)
│   ├── App.tsx           # Main application component with routing
│   ├── index.tsx         # Main entry point of the application
│   └── types.ts          # TypeScript type definitions
├── .gitignore            # Files to be ignored by Git
├── index.html            # Main HTML file
├── package.json          # Project dependencies and scripts
├── vite.config.js        # Vite configuration
└── README.md             # You are here!
