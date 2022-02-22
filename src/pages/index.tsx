import { GraphQLClient } from 'graphql-request'

import { queries } from 'services'
import { CreatorCard } from 'components'

import * as I from 'interfaces/pages/HomePage.interfaces'
import * as S from 'styles/pages/HomePage.styles'

export const getServerSideProps = async () => {
  const url = process.env.GRAPHCMS_ENDPOINT
  const token = process.env.GRAPHCMS_TOKEN

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  let pages: I.PagesObject

  try {
    const data = await graphQLClient.request(queries.getAllCreatorPages)
    pages = data.pages
  } catch (err) {
    console.log(err)
  }

  return {
    props: {
      pages,
    },
  }
}

const HomePage: React.FC<I.HomePageProps> = ({ pages }) => {
  return (
    <main>
      <S.HomePage__Container>
        <h1>Look who's already sharing links with Amazing Links!</h1>
        {pages && (
          <S.HomePage__Grid>
            {pages.map(page => (
              <CreatorCard
                key={page.id}
                creator={page.creator}
                slug={page.slug}
              />
            ))}
          </S.HomePage__Grid>
        )}
        {!pages && <p>Oh no! Found no users.</p>}
      </S.HomePage__Container>
    </main>
  )
}

export default HomePage
