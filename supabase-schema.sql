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

-- Create an index on created_at for ordering
CREATE INDEX idx_articles_created_at ON articles(created_at DESC);

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

-- Create trigger to automatically update updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = timezone('utc'::text, now());
    RETURN NEW;
END;
$$ language 'plpgsql';

CREATE TRIGGER update_articles_updated_at 
    BEFORE UPDATE ON articles 
    FOR EACH ROW 
    EXECUTE FUNCTION update_updated_at_column();

-- Insert some sample data (optional)
INSERT INTO articles (title, content, excerpt, published, author, tags, slug) VALUES
(
  'Welcome to My New Website',
  'This is my first article on my new website! I''m excited to share my thoughts and experiences with you. The site is built with modern technologies including React, TypeScript, Tailwind CSS, and Supabase.',
  'Welcome to my newly redesigned personal website and blog. Built with modern web technologies.',
  true,
  'Andrew Brough',
  ARRAY['announcement', 'welcome', 'web development'],
  'welcome-to-my-new-website'
),
(
  'Building Modern Web Applications',
  'In this article, I''ll share my thoughts on building modern web applications. We''ll cover topics like React, TypeScript, and best practices for scalable applications.',
  'Thoughts and best practices for building modern, scalable web applications.',
  true,
  'Andrew Brough',
  ARRAY['react', 'typescript', 'web development', 'best practices'],
  'building-modern-web-applications'
);