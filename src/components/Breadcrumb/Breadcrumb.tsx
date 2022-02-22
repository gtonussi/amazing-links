import Link from 'next/link'

import * as I from './Breadcrumb.interfaces'
import * as S from './Breadcrumb.styles'

export const Breadcrumb: React.FC<I.BreadcrumbProps> = ({ creator }) => {
  return (
    <S.Breadcrumb__Container>
      <p>
        <Link href="/">
          <a>Home</a>
        </Link>
      </p>
      <p>|</p>
      <p>
        <strong>{creator}</strong>
      </p>
    </S.Breadcrumb__Container>
  )
}
