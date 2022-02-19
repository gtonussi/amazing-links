import { Avatar } from 'components'
import { SEO } from 'containers'

import * as S from 'styles/pages/userProfile'

export const getServerSideProps = async context => {
  const slug = context.query.slug

  return {
    props: {
      slug,
    },
  }
}

const UserProfile = ({ slug }) => {
  return (
    <>
      <S.UserProfile__Container>
        <div>
          <h1>{slug}</h1>
          <Avatar height="200px" width="200px" />
        </div>
      </S.UserProfile__Container>
    </>
  )
}

export default UserProfile
