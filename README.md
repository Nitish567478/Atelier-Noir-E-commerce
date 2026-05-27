# Atelier Noir Storefront (React + Vite)

A small demo storefront built with **React** and **Vite**. It includes a homepage collection grid, **About** and **Contact** pages, and a simple client-side shopping bag (drawer).

## Features

- **Routes (client-side):**
  - `/` (Home)
  - `/about`
  - `/contact`
- **Shopping bag drawer**
  - Add items from the home page collections
  - Remove items
  - Shows item count + total
  - **Checkout is a UI placeholder** (“Coming Soon”)

## Tech Stack

- React 19
- Vite
- lucide-react (icons)

## Getting Started

From the `my-app` directory:

```bash
npm install
npm run dev
```

Then open the local URL shown in the terminal.

## Build / Lint

```bash
npm run build
npm run lint
```

## Project Structure (high level)

- `src/App.jsx` – app shell, route switching, cart drawer, checkout popup
- `src/pages/` – `home.jsx`, `about.jsx`, `contact.jsx`
- `src/components/` – shared UI components (e.g. add-to-cart)
- `src/App.css` – main styling

## Notes

- The cart is stored in component state (no backend / persistence).
- The site uses `window.history.pushState` for route navigation.

