# Angola Digital Forum 2025 Website

This is a static website for the Angola Digital Forum 2025 event, created with HTML, CSS, and JavaScript.

## Table of Contents
- [Overview](#overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Deployment](#deployment)

## Overview

The Angola Digital Forum (ADF) 2025 is the 4th edition of a digital technology event in Angola with the theme "Made In Angola". This website provides information about the event, speakers, schedule, and registration details.

## Features

- Responsive design for all device sizes
- Interactive navigation with smooth scrolling
- Mobile-friendly navigation menu
- Speaker showcase
- Detailed event schedule
- Registration section
- Partners/sponsors section
- Contact form
- Animation effects

## Technologies Used

- HTML5
- CSS3
- JavaScript (ES6+)
- Vite (Build tool)
- Font Awesome (Icons)
- Google Fonts (Typography)

## Project Structure

```
adf2025/
├── public/
│   ├── images/
│   │   ├── adf-logo.png
│   │   ├── hero-bg.jpg
│   │   ├── about-image.jpg
│   │   ├── speaker-*.jpg
│   │   ├── partner-*.png
│   │   └── registration-bg.jpg
├── src/
│   ├── main.js
│   └── style.css
├── index.html
├── package.json
└── README.md
```

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
bun install
```
3. Run the development server:
```bash
bun run dev
```
4. Open http://localhost:5173 in your browser

## Deployment

The site is deployed on Netlify and can be accessed at: https://same-xvcf20mow2u-latest.netlify.app

To deploy:
1. Build the project:
```bash
bun run build
```
2. The built files will be in the `dist` directory
3. These files can be deployed to any static hosting service like Netlify, Vercel, or GitHub Pages.
