import styled from "styled-components";

export const CreatorPage__Container = styled.div`
  background: #e5e5e5;
  height: 100%;
  width: 100%;
`

export const CreatorPage__Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  width: auto;
  max-width: 600px;
  padding: 3rem 1rem;

  @media (max-width: 767px) {
    padding: 2rem 1rem;
  }
`

export const CreatorPage__CTAWrapper = styled.article`
  width: 100%;
  height: 100%;

  & + & {
    margin-top: 1.25rem;
  }
`

export const CreatorPage__BreadcrumbWrapper = styled.section`
  margin-bottom: 2rem;
`
