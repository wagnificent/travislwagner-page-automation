# Travis Wagner - Process Architecture & Automation

A high-end, single-page portfolio and lead generation website for Travis Wagner, a freelancer specializing in mapping and automating processes for local businesses and non-profits. The site features a minimalist design with whitespace, clear typography, and subtle animations to convey professionalism and efficiency. It educates visitors on process mapping, automation (including innovative lead handling), and captures leads via a sleek contact form.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/wagnificent/travislwagner-page-automation)

## Features

- **Hero Section**: Compelling value proposition ("Reclaim your time") with subtle gradient animations.
- **Problem/Solution**: Interactive contrast between manual chaos and automated order.
- **Services**: Detailed breakdowns of Process Mapping and Automation Implementation (Zapier, Make, custom scripts).
- **Automation Showcase**: Before/After visualization of lead handling automation (email to CRM + notifications).
- **About Section**: Professional bio building trust.
- **Contact Form**: Validated form with mock submission, success feedback, and responsive design.
- **Smooth Scrolling Navigation**: Sticky glassmorphism header with anchor links.
- **Fully Responsive**: Mobile-first design with flawless layouts across devices.
- **Interactive Polish**: Hover effects, micro-interactions, and Framer Motion animations.
- **Accessibility**: High contrast, keyboard navigation, and screen reader support.

## Tech Stack

- **Frontend**: React 18, TypeScript, Vite
- **UI Library**: shadcn/ui (Radix UI primitives), Tailwind CSS 3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Forms**: React Hook Form, Zod validation
- **Routing**: React Router DOM
- **State/UI**: Sonner (toasts), clsx, tailwind-merge
- **Deployment**: Cloudflare Workers/Pages
- **Other**: Zustand (state), Immer, React Query (optional caching)

## Quick Start

1. **Clone the repository**:
   ```
   git clone <repository-url>
   cd travis-wagner-portfolio
   ```

2. **Install dependencies** (using Bun):
   ```
   bun install
   ```

3. **Run in development**:
   ```
   bun dev
   ```
   Open [http://localhost:3000](http://localhost:3000) (or the port shown).

## Development

- **Linting**:
  ```
  bun lint
  ```

- **Type checking**:
  ```
  bun tsc --noEmit
  ```

- **Build for production**:
  ```
  bun build
  ```

- **Preview production build**:
  ```
  bun preview
  ```

### Scripts

| Script | Description |
|--------|-------------|
| `bun dev` | Start dev server (hot reload) |
| `bun build` | Build for production |
| `bun lint` | Run ESLint |
| `bun deploy` | Build + deploy to Cloudflare |

### Project Structure

```
src/
├── components/     # UI components (shadcn/ui + custom)
├── hooks/          # Custom React hooks
├── lib/            # Utilities (error reporting, clsx)
├── pages/          # Page components (HomePage.tsx is main)
└── main.tsx        # App entry (React Router)
worker/             # Cloudflare Worker routes (API)
```

### Customization

- Edit `src/pages/HomePage.tsx` for main content.
- Add API routes in `worker/userRoutes.ts`.
- Tailwind config: `tailwind.config.js`.
- shadcn/ui components: Import from `@/components/ui/*`.

## Deployment

Deploy instantly to Cloudflare Workers/Pages with zero configuration.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/wagnificent/travislwagner-page-automation)

### Manual Deployment

1. **Build the app**:
   ```
   bun build
   ```

2. **Deploy**:
   ```
   bun deploy
   ```
   (Requires Wrangler CLI: `bunx wrangler@latest login`)

3. **Custom Domain** (optional):
   ```
   bunx wrangler@latest deploy --var ASSETS:<your-bundle-url>
   ```

Assets are served via Cloudflare Pages integration. API routes are handled by the Worker.

## Contributing

1. Fork the repo.
2. Create a feature branch (`git checkout -b feature/AmazingFeature`).
3. Commit changes (`git commit -m 'Add some AmazingFeature'`).
4. Push to branch (`git push origin feature/AmazingFeature`).
5. Open a Pull Request.

## License

MIT License - see [LICENSE](LICENSE) for details (or add your own).