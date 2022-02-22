import styled from 'styled-components'

export const Link__Container = styled.button`
  background-color: #edf1ff;
  border-radius: 8px;
  border: 2px solid #aec0ff;
  color: #1f48da;
  cursor: pointer;
  font-weight: 600;
  height: auto;
  justify-content: center;
  padding: 1rem;
  transition: all 300ms ease;
  width: 100%;
  position: relative;

  &:hover {
    background-color: #aec0ff;
    color: #fff;
  }
`

export const Link__IconWrapper = styled.span`
  position: absolute;
  left: 1rem;
  top: 0.8rem;

  img {
    width: auto;
    height: 24px;
  }
`
