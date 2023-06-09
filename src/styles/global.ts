import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #dcdfe3;
    --shape: #fff;
    
    --red: #e52e4d;
    --red-light: #f7cbd2;
    --blue: #5428cc;
    --green: #33cc95;
    --green-light: #c4f2e2;

    --blue-light: #6933ff;

    --text-title: #363f5f;
    --text-body: #969cb3;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
       font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }
  
  body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;
  }

  h1, h2, h3, h4, h5, strong {
    font-weight: 600;
  }

  body {
    background: var(--background);
    -webkit-font-smoothing: antialiased; 
  }

  button {
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  .react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    top: 0;
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .react-modal-content {
    background: var(--shape);
    padding: 2rem;
    width: 100%;
    max-width: 600px;
  }

  .react-modal-close{
    background: transparent;
    transition: 200ms;
    border: none;
    &:hover {
      filter: brightness(0.8);
    }
  }

`;