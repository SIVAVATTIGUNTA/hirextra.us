# Hirextra React App

A modern React application built with TypeScript, Vite, and React Router.

## Project Structure

```
src/
 ├─ components/
 │   ├─ Navbar.tsx
 │   └─ Footer.tsx
 ├─ pages/
 │   ├─ Home.tsx
 │   ├─ PlatformOverview.tsx
 │   └─ BusinessConsultantServices.tsx
 ├─ routes/
 │   └─ AppRoutes.tsx
 ├─ App.tsx
 ├─ main.tsx
 ├─ App.css
 └─ index.css
```

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Features

- ⚛️ React 18 with TypeScript
- 🚀 Vite for fast development and building
- 🧭 React Router for navigation
- 📱 Responsive design
- 🎨 Modern UI components

## Available Routes

- `/` - Home page
- `/platform-overview` - Platform overview page
- `/business-consultant-services` - Business consultant services page

## Development

The app uses:
- **React Router DOM** for client-side routing
- **TypeScript** for type safety
- **Vite** as the build tool

## Notes

- The existing `style.css` file is imported in `index.css` to maintain the original styling
- All components are functional components using React Hooks
- The Navbar includes dropdown menu functionality
- The Footer includes social media links and company information

