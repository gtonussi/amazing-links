import * as S from './Button.styles'
import * as I from './Button.interfaces'

export const Button: React.FC<I.ButtonProps> = ({ copy }) => {
  return <S.Button__Container>{copy}</S.Button__Container>
}
