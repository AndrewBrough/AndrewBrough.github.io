import { Article } from '../types/database'

interface ArticleListProps {
  articles: Article[]
  loading: boolean
}

export default function ArticleList({ articles, loading }: ArticleListProps) {
  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    )
  }

  if (articles.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="text-4xl mb-4">📝</div>
        <h3 className="text-xl font-semibold mb-2">No articles yet</h3>
        <p className="text-gray-600">Check back soon for new content!</p>
      </div>
    )
  }

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {articles.map((article) => (
        <div key={article.id} className="card bg-base-100 shadow-xl hover:shadow-2xl transition-shadow">
          <div className="card-body">
            <h2 className="card-title text-lg">{article.title}</h2>
            <p className="text-gray-600 line-clamp-3">{article.excerpt}</p>
            
            <div className="flex flex-wrap gap-1 my-2">
              {article.tags.map((tag) => (
                <span key={tag} className="badge badge-outline badge-sm">{tag}</span>
              ))}
            </div>
            
            <div className="card-actions justify-between items-center mt-4">
              <div className="text-sm text-gray-500">
                <div>By {article.author}</div>
                <div>{formatDate(article.created_at)}</div>
              </div>
              <button className="btn btn-primary btn-sm">
                Read More
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}