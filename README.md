# B2D Official Website

Monorepo website B2D berbasis React 19, Vite, Tailwind CSS, dan React Three Fiber.

## Struktur

```text
frontend/       React application
backend/        Placeholder backend
legacy-static/  Baseline website statis sebelum migrasi
```

## Menjalankan Project

```bash
npm install
npm run dev
npm run build
npm run check
npm run lighthouse
```

`npm run check` memverifikasi budget initial bundle dan memastikan Three.js tetap menjadi dynamic chunk. `npm run lighthouse` menjalankan median tiga audit mobile dan menegakkan target Performance, Accessibility, SEO, LCP, CLS, dan TBT.

Scene Three.js bersifat opt-in agar tidak mengubah visual existing atau membebani initial render:

```bash
VITE_ENABLE_THREE=true npm run dev
```

Di PowerShell:

```powershell
$env:VITE_ENABLE_THREE="true"
npm run dev
```

Lihat [MIGRATION_PLAN.md](./MIGRATION_PLAN.md) untuk keputusan arsitektur dan quality gate.
