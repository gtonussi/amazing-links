import styled from "styled-components";

import * as I from './Info.interfaces'

export const Info__Container = styled.section<I.Info__Container>`
  margin: ${({ margin }) => margin ? `${margin}` : `0`};

  h1 {
    font-size: 1.25rem;
    font-weight: 600;
    line-height: 1.15;
    margin: 0;
    padding: 0;
    text-align: ${({ textDirection }) => textDirection ? `${textDirection}` : `left`};
  }

  h2 {
    font-size: 1rem;
    font-weight: 300;
    line-height: 1.15;
    margin: 0;
    padding: 0;
    text-align: ${({ textDirection }) => textDirection ? `${textDirection}` : `left`};
  }

  h1 + h2 {
    margin-top: 0.5rem;
  }
`
