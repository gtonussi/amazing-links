import * as S from './YTEmbeded.styles'
import * as I from './YTEmbeded.interfaces'

export const YTEmbeded: React.FC<I.YTEmbededProps> = ({ ytid }) => {
  return (
    <S.YTEmbeded__Container>
      <iframe
        src={`https://www.youtube.com/embed/${ytid}`}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      />
    </S.YTEmbeded__Container>
  )
}
