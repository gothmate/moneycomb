import styled from "styled-components";

export const Container = styled.header`
  background: var(--blue);
  display: flex;
  justify-content: center;
  align-items: center;
  `

export const Content = styled.div`
  min-width: 70%;
  display: flex;
  justify-content: space-between;
  padding: 2rem 1rem 10rem;

  .logo {
    display: flex;
    color: var(--shape);
    font-size: 1rem;
    font-weight: 400;
    justify-content: flex-start;
    align-items: center;

    & h1 {
      margin-left: -7rem;
    }
  }

  button {
    font-size: 1rem;
    color: var(--shape);
    background: var(--blue-light);
    border: none;
    padding: 0 2rem;
    border-radius: .25rem;
    height: 3rem;
    transition: filter 200ms;

    &:hover {
      filter: brightness(1.2)
    }
  }

`