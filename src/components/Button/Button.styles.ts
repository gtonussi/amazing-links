import styled from 'styled-components'

export const Button__Container = styled.button`
  background-color: #edf1ff;
  border-radius: 8px;
  border: 2px solid #aec0ff;
  color: #1f48da;
  cursor: pointer;
  font-weight: 600;
  height: auto;
  padding: 0.875rem;
  transition: all 300ms ease;
  width: 100%;

  &:hover {
    background-color: #aec0ff;
    border: 2px solid #edf1ff;
    color: #fff;
  }
`
