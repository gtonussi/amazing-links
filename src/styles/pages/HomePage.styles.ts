import styled from 'styled-components'

export const HomePage__Container = styled.div`
  margin: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    line-height: 1.15;
    margin: 0 0 2rem;
    padding: 0;
  }
`

export const HomePage__Grid = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-gap: 2rem;

  @media (max-width: 767px) {
    grid-template-columns: 1fr;
  }
`
