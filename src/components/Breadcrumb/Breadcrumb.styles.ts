import styled from 'styled-components'

export const Breadcrumb__Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  a {
    color: inherit;
    font-size: inherit;
    font-weight: inherit;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }

  p {
    font-size: 0.875rem;
    font-weight: 300;

    strong {
      font-weight: 700;
    }
  }

  p + p {
    margin-left: 0.5rem;
  }
`
