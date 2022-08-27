import styled from "styled-components";

export const CheckoutProduct = styled.div<{open: Boolean}> `
  background-color: blue;
  position: fixed;
  top: 0;
  right: 0;
  height: 100%;
  width: 90%;
  box-shadow: 0px 10px 15px 3px rgba(0,0,0,0.3);
  display: ${props => props.open === false ? 'none' : 'block' };

  header {
    display: flex;
    color: white;
    justify-content: space-between;
    margin: 2rem;
  }
  header h1 {
    display: flex;
    flex-direction: column;
    width: 180px;
    font-size: 1.7rem;
  }
  header div {
    position: absolute;
    right: 0;
    margin: 0 1rem;
    width: 2rem;
    height: 2rem;
    background-color: black;
    border-radius: 50%;
    padding: .3rem;
    cursor: pointer;
  }
  header div svg {
    font-size: 1.4rem;
  }

  section {
    display: flex;
    flex-direction: column;
    height: 83%;
    justify-content: space-between;
  }

  section main {
    height: 20rem;
    overflow-y: scroll;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 1rem;
  };

  footer {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  footer section {
    color: white;
    font-size: 1.5rem;
  }
  footer section h1 {
    display: flex;
    justify-content: space-between;
    margin: 2rem;
  }
  footer button {
    padding: 1.5rem;
    background-color: black;
    color: white;
    font-size: 1.5rem;
    cursor: pointer;
    border: none;
  }


  /* responsividade */

  @media (min-width: 650px) {
    width: 28rem;
  }
`