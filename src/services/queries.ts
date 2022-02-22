import { gql } from 'graphql-request'

export const queries = {
  getCreatorPageBySlug: gql`
    query ($slug: String!) {
      page(where: { slug: $slug }) {
        id,
        blocks {
          __typename
          ... on Link {
            id,
            source,
            url
          },
          ... on YoutubeVideo {
            id,
            ytid
          }
        },
        creator {
          id,
          name,
          avatar {
            id,
            url
          }
          bio
        }
      }
    }
  `,
  getAllCreatorPages: gql`
    query {
      pages {
        id,
        slug,
        creator {
          id,
          name,
          avatar {
            id,
            url
          }
        },
      }
    }
  `
}
