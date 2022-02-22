import { useMediaQuery } from 'react-responsive'
import { useRouter } from 'next/router'

import { Avatar } from 'components'

import * as I from './CreatorCard.interfaces'
import * as S from './CreatorCard.styles'

export const CreatorCard: React.FC<I.CreatorCardProps> = ({
  creator,
  slug,
}) => {
  const router = useRouter()

  const isMobile = useMediaQuery({
    query: '(max-width: 767px)',
  })

  return (
    <S.CreatorCard__Container onClick={() => router.push(`/creator/${slug}`)}>
      <Avatar
        altText={`Picture of ${creator.name}`}
        imageUrl={creator.avatar?.url}
        height={isMobile ? '70px' : '90px'}
        width={isMobile ? '70px' : '90px'}
      />
      <div>
        <h3>{creator.name}</h3>
        <h4>
          <strong>{`@${slug}`}</strong>
        </h4>
      </div>
    </S.CreatorCard__Container>
  )
}
