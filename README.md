# Coffee Point

Ready-to-run frontend project for a Coffee Point landing page.

## Project structure

```text
coffee_point/
├── public/                 # Static public files copied as-is
│   ├── favicon.svg
│   └── site.webmanifest
├── src/
│   ├── assets/             # Product photos, banners, brand assets
│   ├── data/               # Catalog/category data
│   │   └── products.js
│   ├── scripts/            # Browser JavaScript
│   │   └── main.js
│   └── styles/             # Site styles
│       └── main.css
├── index.html              # Main page template
├── package.json            # Run/build scripts
├── vite.config.js          # Vite dev/preview config
└── README.md
```

## Requirements

- Node.js 20.19+ or 22.12+
- npm

## Install

```bash
npm install
```

## Local development

```bash
npm run dev
```

Open the URL printed by Vite, usually `http://localhost:5173/`.

## Production build

```bash
npm run build
```

The production files will be generated in `dist/`.

## Preview production build

```bash
npm run preview
```

## Content notes

- Product/category content lives in `src/data/products.js`.
- Main interactions live in `src/scripts/main.js`.
- Layout and responsive styles live in `src/styles/main.css`.
- Replace CSS placeholder products with real images in `src/assets/` when final product photos are ready.
