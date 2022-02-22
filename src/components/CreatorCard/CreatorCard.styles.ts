import styled from 'styled-components'

import { Avatar__Container } from 'components/Avatar/Avatar.styles'

export const CreatorCard__Container = styled.article`
  align-items: center;
  cursor: pointer;
  display: flex;
  flex-direction: row;

  h3 {
    font-size: 1.25rem;
    line-height: 1.15;
    margin: 0;
    padding: 0;
    font-weight: 400;
  }

  h4 {
    font-size: 1rem;
    line-height: 1.15;
    margin: 0;
    padding: 0;
  }

  h3 + h4 {
    margin-top: 0.5rem;
  }

  ${Avatar__Container} + div {
    margin-left: 1rem;
  }
`
