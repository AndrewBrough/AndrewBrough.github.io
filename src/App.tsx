import { useState, useEffect } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import ArticleList from './components/ArticleList'
import About from './components/About'
import Footer from './components/Footer'
import ArticleEditor from './components/ArticleEditor'
import { Article } from './types/database'
import { supabase } from './lib/supabase'

type Page = 'home' | 'about' | 'articles' | 'editor'

function App() {
  const [currentPage, setCurrentPage] = useState<Page>('home')
  const [articles, setArticles] = useState<Article[]>([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (currentPage === 'articles' || currentPage === 'home') {
      fetchArticles()
    }
  }, [currentPage])

  const fetchArticles = async () => {
    setLoading(true)
    try {
      const { data, error } = await supabase
        .from('articles')
        .select('*')
        .eq('published', true)
        .order('created_at', { ascending: false })

      if (error) {
        console.error('Error fetching articles:', error)
      } else {
        setArticles(data || [])
      }
    } catch (error) {
      console.error('Error:', error)
    } finally {
      setLoading(false)
    }
  }

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return (
          <>
            <Hero />
            <section className="py-16 bg-base-100">
              <div className="container mx-auto px-4">
                <h2 className="text-3xl font-bold text-center mb-12">Latest Articles</h2>
                <ArticleList articles={articles.slice(0, 3)} loading={loading} />
                {articles.length > 3 && (
                  <div className="text-center mt-8">
                    <button 
                      className="btn btn-primary btn-outline"
                      onClick={() => setCurrentPage('articles')}
                    >
                      View All Articles
                    </button>
                  </div>
                )}
              </div>
            </section>
          </>
        )
      case 'about':
        return <About />
      case 'articles':
        return (
          <div className="min-h-screen bg-base-100 py-16">
            <div className="container mx-auto px-4">
              <h1 className="text-4xl font-bold text-center mb-12">All Articles</h1>
              <ArticleList articles={articles} loading={loading} />
            </div>
          </div>
        )
      case 'editor':
        return <ArticleEditor onArticleCreated={fetchArticles} />
      default:
        return <Hero />
    }
  }

  return (
    <div className="min-h-screen bg-base-100">
      <Header currentPage={currentPage} onPageChange={setCurrentPage} />
      {renderPage()}
      <Footer />
    </div>
  )
}

export default App