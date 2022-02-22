import * as S from './Avatar.styles'
import * as I from './Avatar.interfaces'

export const Avatar: React.FC<I.AvatarProps> = ({
  altText = 'Icon of a person',
  height = '120px',
  imageUrl = '/assets/images/default-no-avatar.png',
  width = '120px',
}) => {

  return (
    <S.Avatar__Container height={height} width={width}>
      <img alt={altText} src={imageUrl}/>
    </S.Avatar__Container>
  )
}
