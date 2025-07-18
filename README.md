# Andrew Brough - Personal Website & Blog

A modern, minimalistic personal website built with React, Vite, TypeScript, Tailwind CSS, DaisyUI, and Supabase. Features a built-in CMS for article publishing.

## 🚀 Features

- **Modern Tech Stack**: React 18, Vite, TypeScript, Tailwind CSS, DaisyUI
- **Responsive Design**: Mobile-first, fully responsive layout
- **CMS Functionality**: Built-in article editor and management system
- **Database Integration**: Supabase for lightweight, real-time data management
- **Theme Support**: Multiple DaisyUI themes (Light, Dark, Cupcake)
- **SEO Friendly**: Semantic HTML and optimized meta tags
- **Fast Performance**: Vite for lightning-fast development and builds

## 🛠️ Tech Stack

- **Frontend**: React, TypeScript, Vite
- **Styling**: Tailwind CSS, DaisyUI
- **Database**: Supabase
- **Deployment**: Ready for Vercel, Netlify, or GitHub Pages

## 📦 Installation

1. Clone the repository:
```bash
git clone https://github.com/AndrewBrough/AndrewBrough.github.io.git
cd AndrewBrough.github.io
git checkout 2025
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Update `.env` with your Supabase credentials:
```env
VITE_SUPABASE_URL=your-supabase-project-url
VITE_SUPABASE_ANON_KEY=your-supabase-anon-key
```

## 🗄️ Database Setup

Create the following table in your Supabase dashboard:

```sql
-- Create articles table
CREATE TABLE articles (
  id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  content TEXT NOT NULL,
  excerpt TEXT NOT NULL,
  published BOOLEAN DEFAULT false,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT timezone('utc'::text, now()) NOT NULL,
  author TEXT NOT NULL,
  tags TEXT[] DEFAULT '{}',
  slug TEXT UNIQUE NOT NULL
);

-- Create an index on the slug for faster lookups
CREATE INDEX idx_articles_slug ON articles(slug);

-- Create an index on published articles
CREATE INDEX idx_articles_published ON articles(published) WHERE published = true;

-- Enable Row Level Security (RLS)
ALTER TABLE articles ENABLE ROW LEVEL SECURITY;

-- Create policy to allow public read access to published articles
CREATE POLICY "Public articles are viewable by everyone" ON articles
FOR SELECT USING (published = true);

-- Create policy to allow authenticated users to insert articles
CREATE POLICY "Authenticated users can insert articles" ON articles
FOR INSERT WITH CHECK (auth.role() = 'authenticated');

-- Create policy to allow authenticated users to update their articles
CREATE POLICY "Users can update their own articles" ON articles
FOR UPDATE USING (auth.role() = 'authenticated');
```

## 🚀 Development

Start the development server:
```bash
npm run dev
```

Build for production:
```bash
npm run build
```

Preview production build:
```bash
npm run preview
```

## 📁 Project Structure

```
src/
├── components/          # React components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── ArticleList.tsx
│   ├── ArticleEditor.tsx
│   ├── About.tsx
│   └── Footer.tsx
├── lib/                # Utilities and configurations
│   └── supabase.ts
├── types/              # TypeScript type definitions
│   └── database.ts
├── App.tsx             # Main application component
├── main.tsx           # Application entry point
└── index.css          # Global styles
```

## 🎨 Customization

### Themes
The website supports multiple DaisyUI themes. You can switch between them using the theme selector in the header, or modify the available themes in `tailwind.config.js`:

```javascript
daisyui: {
  themes: ["light", "dark", "cupcake", "synthwave", "halloween"],
}
```

### Colors
Customize the color scheme by modifying the Tailwind configuration or using DaisyUI's semantic color classes.

### Content
- Update personal information in the Hero and About components
- Modify social media links in the Header and Footer components
- Add your own profile image in the About component

## 📝 Writing Articles

1. Navigate to the "Write" section
2. Fill in the article details:
   - Title (auto-generates slug)
   - Excerpt (brief description)
   - Content (main article body)
   - Tags (comma-separated)
   - Author
   - Publish status
3. Click "Create Article" to save

Articles marked as "published" will automatically appear on the website.

## 🚀 Deployment

### GitHub Pages
This project is configured for GitHub Pages deployment. Push to the main branch or set up GitHub Actions for automatic deployment.

### Vercel
1. Connect your GitHub repository to Vercel
2. Add environment variables in Vercel dashboard
3. Deploy automatically on push

### Netlify
1. Connect your repository to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `dist`
4. Add environment variables

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Vite](https://vitejs.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/) and [DaisyUI](https://daisyui.com/)
- Database powered by [Supabase](https://supabase.com/)
- Icons from [Heroicons](https://heroicons.com/)

---

Made with ❤️ by Andrew Brough