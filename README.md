# Andrew Brough - Professional Portfolio

A modern, minimalist portfolio website built with React, TypeScript, and Vite. Features a charcoal theme with shadcn/ui components.

## Features

- **Modern Tech Stack**: React 18, TypeScript, Vite
- **Beautiful UI**: shadcn/ui components with Tailwind CSS
- **Responsive Design**: Mobile-first approach with desktop optimization
- **Static Generation**: Perfect for GitHub Pages deployment
- **Professional Focus**: Showcases web development services for small businesses

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with shadcn/ui components
- **Icons**: Lucide React
- **Deployment**: GitHub Pages

## Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
npm install
```

### Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

The built files will be in the `dist/` directory and copied to the root for GitHub Pages deployment.

## Project Structure

```
├── src/
│   ├── components/
│   │   └── ui/          # shadcn/ui components
│   ├── lib/
│   │   └── utils.ts     # Utility functions
│   ├── App.tsx          # Main application component
│   ├── main.tsx         # Application entry point
│   └── index.css        # Global styles
├── index.html           # HTML template
└── dist/               # Built files (for GitHub Pages)
```

## Customization

### Content Updates

- **Profile**: Update the hero section in `src/App.tsx`
- **Projects**: Modify the `projects` array in `src/App.tsx`
- **Services**: Update the `services` array in `src/App.tsx`
- **Contact**: Update email and social links in the contact section

### Styling

- **Theme**: Modify CSS variables in `src/index.css`
- **Components**: Customize shadcn/ui components in `src/components/ui/`
- **Layout**: Adjust Tailwind classes in `src/App.tsx`

## Deployment

This project is configured for GitHub Pages deployment. The built files are automatically copied to the root directory, making them ready for GitHub Pages.

## License

ISC License