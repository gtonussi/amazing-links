export interface PagesObject {
  id: string
  slug: string
  creator: {
    id: string
    name: string
    avatar: {
      id: string
      url: string
    }
  }
}

export interface HomePageProps {
  pages: PagesObject[]
}
