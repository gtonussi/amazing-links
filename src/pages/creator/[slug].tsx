import { GraphQLClient } from 'graphql-request'
import { useMediaQuery } from 'react-responsive'

import { Avatar, Info, Link, YTEmbeded } from 'components'
import { SEO } from 'containers'
import { queries } from 'services'

import * as S from 'styles/pages/CreatorPage.styles'
import * as I from 'interfaces/pages/CreatorPage.interfaces'

export const getServerSideProps = async context => {
  const slug = context.query.slug

  const url = process.env.GRAPHCMS_ENDPOINT
  const token = process.env.GRAPHCMS_TOKEN

  const graphQLClient = new GraphQLClient(url, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })

  const queryVariables = {
    slug,
  }

  let page: I.PageObject

  try {
    const data = await graphQLClient.request(
      queries.getCreatorPageBySlug,
      queryVariables
    )
    page = data.page
  } catch (err) {
    console.log(err)
  }

  if (!page) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      slug,
      page,
    },
  }
}

const CreatorPage: React.FC<I.CreatorPageProps> = ({
  slug,
  page: { blocks, creator },
}) => {
  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })

  return (
    <>
      <SEO
        canonical={`https://url/${slug}`}
        description={`Checkout all the content from the creator ${creator.name}`}
        title={`Amazing Links | ${creator.name}`}
      />

      <S.CreatorPage__Container>
        <S.CreatorPage__Content>
          {creator && (
            <>
              <Avatar
                imageUrl={creator.avatar?.url}
                height={isMobile ? '90px' : '120px'}
                width={isMobile ? '90px' : '120px'}
              />

              <Info
                name={creator.name}
                description={creator.bio}
                textDirection="center"
                margin={isMobile ? '1.25rem 0' : '1.75rem 0'}
              />
            </>
          )}

          {blocks &&
            blocks.map(block =>
              block.__typename === 'Link' ? (
                <S.CreatorPage__CTAWrapper key={block.id}>
                  <Link source={block.source} url={block.url} />
                </S.CreatorPage__CTAWrapper>
              ) : (
                <S.CreatorPage__CTAWrapper key={block.id}>
                  <YTEmbeded ytid={block.ytid} />
                </S.CreatorPage__CTAWrapper>
              )
            )}
        </S.CreatorPage__Content>
      </S.CreatorPage__Container>
    </>
  )
}

export default CreatorPage
