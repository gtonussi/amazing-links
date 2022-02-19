import styled from 'styled-components'

import * as I from './Avatar.types'

export const Avatar__Container = styled.div<I.Avatar__Container>`
  background-color: #d3d3d3;
  border-radius: 100%;
  height: ${({ height }) => (height ? `${height}` : `100%`)};
  overflow: hidden;
  width: ${({ width }) => (width ? `${width}` : `100%`)};

  img {
    display: block;
    height: 100%;
    width: 100%;
  }
`
