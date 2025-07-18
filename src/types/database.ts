export interface Database {
  public: {
    Tables: {
      articles: {
        Row: {
          id: string
          title: string
          content: string
          excerpt: string
          published: boolean
          created_at: string
          updated_at: string
          author: string
          tags: string[]
          slug: string
        }
        Insert: {
          id?: string
          title: string
          content: string
          excerpt: string
          published?: boolean
          created_at?: string
          updated_at?: string
          author: string
          tags?: string[]
          slug: string
        }
        Update: {
          id?: string
          title?: string
          content?: string
          excerpt?: string
          published?: boolean
          created_at?: string
          updated_at?: string
          author?: string
          tags?: string[]
          slug?: string
        }
      }
    }
  }
}

export type Article = Database['public']['Tables']['articles']['Row']