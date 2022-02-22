import * as S from './Avatar.styles'
import * as I from './Avatar.interfaces'

export const Avatar: React.FC<I.AvatarProps> = ({
  altText,
  height,
  imageUrl,
  width,
}) => {

  return (
    <S.Avatar__Container height={height} width={width}>
      <img alt={altText} src={imageUrl}/>
    </S.Avatar__Container>
  )
}
