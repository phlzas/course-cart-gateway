# Course Cart Gateway — E-Learning Course Marketplace

A frontend-only e-learning course marketplace with a shopping cart and simulated checkout flow. Users can browse a course catalog, filter and search courses, view course details, add courses to a cart, complete a mock checkout, and access purchased course content through a lesson player.

## Overview

Course Cart Gateway is a client-side web application for discovering and "purchasing" online courses. It is built as a React single-page application (SPA) with a mock data layer — there is no backend, no database, and no real payment processing. Cart contents and purchased courses are persisted in the browser's `localStorage`, and checkout is a simulated card-payment form.

The repository also contains a set of standalone static HTML/CSS/JS prototype pages (`cart.html`, `courses.html`, `course-details.html`, `cart.js`, `courses.js`) that mirror the same CourseCart concept as a lightweight, framework-free prototype.

## Features

- **Course catalog** — browse a mock catalog of courses across categories (Web Development, JavaScript, Design, Data Science, Mobile Development) with ratings, pricing, and discount pricing (`/courses`).
- **Search and filtering** — search courses by keyword and filter by category, level, and price (`src/pages/Courses.tsx`, `src/components/CourseFilter.tsx`, `src/components/SearchBar.tsx`).
- **Course details** — per-course detail pages with description, instructor, lesson list, and add-to-cart action (`/course/:id`).
- **Shopping cart** — add/remove courses, clear cart, live totals with discount handling, persisted to `localStorage` (`src/context/CartContext.tsx`, `/cart`).
- **Checkout** — simulated payment form with card-number/expiry formatting, processing state, and order completion that moves purchased courses into the library (`/checkout`).
- **My Learning** — library of purchased courses with search and progress indicators (`/my-courses`).
- **Lesson player** — a course-content viewer with a lesson sidebar, previous/next navigation, and purchase gating (redirects non-owners to the course page) (`/course-content/:id`).
- **Static prototype** — framework-free HTML/CSS/JS versions of the catalog, cart, and course-detail pages at the repository root.

## Tech Stack

- **Framework** — React 18 with TypeScript, built with Vite 5 (`@vitejs/plugin-react-swc`).
- **Routing** — React Router v6 (`BrowserRouter`).
- **Styling** — Tailwind CSS 3 with `tailwindcss-animate`, plus shadcn/ui components (Radix UI primitives, `class-variance-authority`, `tailwind-merge`).
- **State & data** — React Context + `useReducer` for cart state; TanStack Query for server-state patterns; mock course data in `src/data/coursesData.ts`; `localStorage` persistence.
- **UI utilities** — `lucide-react` icons, `sonner` toasts, `recharts` charts, `react-hook-form` + `zod` validation.
- **Package manager** — npm (`package-lock.json`) or Bun (`bun.lockb`).

## Getting Started

```bash
# Install dependencies (npm)
npm install

# Start the Vite dev server (serves on port 8080)
npm run dev
```

Other scripts:

```bash
npm run build        # Production build
npm run build:dev    # Development-mode build
npm run lint         # ESLint
npm run preview      # Preview the production build
```

## Project Structure

```
src/
  main.tsx           React entry point
  App.tsx            Router and providers (QueryClient, Tooltip, Cart)
  pages/             Route components
    Courses.tsx          Course catalog with search/filters
    CourseDetails.tsx    Course detail page
    Cart.tsx             Shopping cart
    Checkout.tsx         Simulated checkout flow
    MyCourses.tsx        Purchased-course library
    CourseContent.tsx    Lesson player (purchase-gated)
    NotFound.tsx         404 page
  components/        Navbar, Footer, CourseCard, CartItem, CourseFilter,
                     SearchBar, CourseContentSidebar, ui/ (shadcn/ui)
  context/
    CartContext.tsx  Cart reducer + localStorage persistence
  data/
    coursesData.ts   Mock course catalog (courses, lessons, pricing)
  lib/
    utils.ts         cn() class-merge helper
  index.css          Global styles / Tailwind directives

Root-level static prototype:
  index.html         React SPA entry (loads src/main.tsx)
  courses.html       Static catalog prototype
  course-details.html  Static course-detail prototype
  cart.html          Static cart prototype
  courses.js, cart.js  Prototype logic (mock data, cart state)
  additional-styles.css  Extra styles for the static prototype
```

## Notes

- This is a frontend-only application: all course data is mock data, and checkout is simulated. No payment or user data leaves the browser.
- The project was generated with Lovable (see the Lovable meta tags in `index.html` and the `lovable-tagger` dev dependency).
- The static prototype pages at the root reference a `styles.css` stylesheet and `checkout.html` / `my-courses.html` pages that are not present in the repository; the prototype is partial and the React SPA is the complete implementation.