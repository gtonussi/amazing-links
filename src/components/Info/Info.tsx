import * as I from './Info.interfaces'
import * as S from './Info.styles'

export const Info: React.FC<I.InfoProps> = ({ description, margin, name, textDirection }) => {
  return (
    <>
      <S.Info__Container margin={margin} textDirection={textDirection}>
        <h1>{name}</h1>
        <h2>{description}</h2>
      </S.Info__Container>
    </>
  )
}
