import styled from 'styled-components'

export const YTEmbeded__Container = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 8px;

  iframe {
    background: #f8f9fb;
    border-radius: 8px;
    box-shadow: 0px 2px 8px rgba(5, 12, 44, 0.5);
    height: 380px;
    width: 100%;

    @media (max-width: 767px) {
      height: 315px;
    }
  }
`
