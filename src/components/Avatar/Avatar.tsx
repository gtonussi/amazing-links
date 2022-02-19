import * as S from './Avatar.styles'
import * as I from './Avatar.types'

export const Avatar: React.FC<I.AvatarProps> = ({
  altText = 'Icon of a person',
  height,
  imageUrl = '/assets/icons/default-no-avatar.png',
  width,
}) => {
  return (
    <S.Avatar__Container height={height} width={width}>
      <img src={imageUrl} alt={altText} />
    </S.Avatar__Container>
  )
}
