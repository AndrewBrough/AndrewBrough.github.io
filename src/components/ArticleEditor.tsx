import { useState } from 'react'
import { supabase } from '../lib/supabase'

interface ArticleEditorProps {
  onArticleCreated: () => void
}

export default function ArticleEditor({ onArticleCreated }: ArticleEditorProps) {
  const [formData, setFormData] = useState({
    title: '',
    content: '',
    excerpt: '',
    author: 'Andrew Brough',
    tags: '',
    slug: '',
    published: false
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState<{ type: 'success' | 'error', text: string } | null>(null)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
    }))

    // Auto-generate slug from title
    if (name === 'title') {
      const slug = value.toLowerCase()
        .replace(/[^a-z0-9]+/g, '-')
        .replace(/(^-|-$)/g, '')
      setFormData(prev => ({ ...prev, slug }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const tagsArray = formData.tags.split(',').map(tag => tag.trim()).filter(tag => tag.length > 0)
      
      const { error } = await supabase
        .from('articles')
        .insert([{
          title: formData.title,
          content: formData.content,
          excerpt: formData.excerpt,
          author: formData.author,
          tags: tagsArray,
          slug: formData.slug,
          published: formData.published
        }])

      if (error) {
        throw error
      }

      setMessage({ type: 'success', text: 'Article created successfully!' })
      setFormData({
        title: '',
        content: '',
        excerpt: '',
        author: 'Andrew Brough',
        tags: '',
        slug: '',
        published: false
      })
      onArticleCreated()
    } catch (error) {
      console.error('Error creating article:', error)
      setMessage({ type: 'error', text: 'Failed to create article. Please try again.' })
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-base-100 py-16">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Write New Article</h1>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </div>

        {message && (
          <div className={`alert ${message.type === 'success' ? 'alert-success' : 'alert-error'} mb-6`}>
            <span>{message.text}</span>
          </div>
        )}

        <div className="card bg-base-200 shadow-xl">
          <div className="card-body">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Title</span>
                  </label>
                  <input
                    type="text"
                    name="title"
                    value={formData.title}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Slug</span>
                  </label>
                  <input
                    type="text"
                    name="slug"
                    value={formData.slug}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    required
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Excerpt</span>
                </label>
                <textarea
                  name="excerpt"
                  value={formData.excerpt}
                  onChange={handleInputChange}
                  className="textarea textarea-bordered h-24"
                  placeholder="Brief description of the article..."
                  required
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold">Content</span>
                </label>
                <textarea
                  name="content"
                  value={formData.content}
                  onChange={handleInputChange}
                  className="textarea textarea-bordered h-64"
                  placeholder="Write your article content here..."
                  required
                />
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Author</span>
                  </label>
                  <input
                    type="text"
                    name="author"
                    value={formData.author}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    required
                  />
                </div>

                <div className="form-control">
                  <label className="label">
                    <span className="label-text font-semibold">Tags (comma-separated)</span>
                  </label>
                  <input
                    type="text"
                    name="tags"
                    value={formData.tags}
                    onChange={handleInputChange}
                    className="input input-bordered"
                    placeholder="react, typescript, web development"
                  />
                </div>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text font-semibold">Publish immediately</span>
                  <input
                    type="checkbox"
                    name="published"
                    checked={formData.published}
                    onChange={handleInputChange}
                    className="checkbox checkbox-primary"
                  />
                </label>
              </div>

              <div className="card-actions justify-end">
                <button 
                  type="submit" 
                  className={`btn btn-primary ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? 'Creating...' : 'Create Article'}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}