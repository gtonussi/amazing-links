import * as S from './Link.styles'
import * as I from './Link.interfaces'

export const Link: React.FC<I.LinkProps> = ({ source, url }) => {
  const iconSelector = () => {
    switch (source) {
      case 'Facebook':
        return <img src="/assets/images/icons8-facebook.svg" alt="Facebook Logo" />
      case 'Github':
        return <img src="/assets/images/icons8-github.svg" alt="Github Logo" />
      case 'Instagram':
        return <img src="/assets/images/icons8-instagram.svg" alt="Instagram Logo" />
      case 'LinkedIn':
        return <img src="/assets/images/icons8-linkedin.svg" alt="LinkedIn Logo" />
      case 'TikTok':
        return <img src="/assets/images/icons8-tiktok.svg" alt="TikTok Logo" />
      case 'Twitter':
        return <img src="/assets/images/icons8-twitter.svg" alt="Twitter Logo" />
      case 'YouTube':
        return <img src="/assets/images/icons8-youtube.svg" alt="Youtube Logo" />
    }
  }

  return (
    <S.Link__Container
      onClick={() => {
        window.open(`${url}`)
      }}
    >
      <S.Link__IconWrapper>{iconSelector()}</S.Link__IconWrapper>
      {source}
    </S.Link__Container>
  )
}
