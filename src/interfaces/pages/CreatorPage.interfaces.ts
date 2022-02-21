export interface PageObject {
  id: string,
  blocks: [
    {
      __typename: string,
      id: string,
      source?: string,
      url?: string,
      ytid?: string
    }
  ],
  creator: {
    id: string,
    name: string,
    avatar?: {
      id: string,
      url: string
    },
    bio?: string
  }
}

export interface CreatorPageProps {
  slug: string,
  page: PageObject
}
