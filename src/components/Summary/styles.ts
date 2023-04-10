import styled from "styled-components";

export const Container = styled.main`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
  margin-top: -9rem;
  justify-content: space-between;
  div {
    background: var(--shape);
    padding: 1.5rem 2rem;
    border-radius: 0.25rem;
    color: var(--text-title);
    & header {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    & strong {
      display: block;
      font-size: 2rem;
      font-weight: 500;
      margin-top: 1rem;
      line-height: 3rem;
    }
    &.highlight-background {
      background: var(--green);
      color: var(--shape);
    }
  }
`;

export const Outcome = styled.strong`
  color: var(--red);
`
export const Income = styled.strong`
  color: var(--blue);
`