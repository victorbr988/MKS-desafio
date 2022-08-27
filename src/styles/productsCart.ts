import styled from "styled-components";
export const ProductsCarts = styled.div `
  width: 100%;
  display: flex;
  justify-content: center;
  #close-modal {
    height: 1.5rem;
    width: 100%;
    display: flex;
    flex-direction: row;
    margin: 0 1rem 0 0 ;
    justify-content: end;
  }
  #close-modal-new {
    display: none;
  }
  svg {
    width: 2rem;
    height: 2rem;
  }
  div {
    background-color: white;
    border-radius: .5rem;
    color: #2C2C2C;
    width: 14rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 2rem;
  }
  div #image-section {
    display: flex;
  }
  img {
    width: 8rem;
    height: 8rem;
  }
  .section {
    display: flex;
  }
  #section-replace-qtd {
    margin: 0 1rem 0 0;
    padding: .5rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
  }
  #replace-qtd {
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding: 1rem;
  }
  #replace-qtd #increment {
    display: flex;
    align-items: center;
    padding: .6rem;
    border: 1px solid #BFBFBF;
    background-color: transparent;
    font-size: 1rem;
    border-radius: 0rem .3rem .3rem 0;
  }
  #replace-qtd #decrement {
    display: flex;
    align-items: center;
    padding: .8rem;
    border: 1px solid #BFBFBF;
    background-color: transparent;
    font-size: 1rem;
    border-radius: .3rem 0 0 .3rem;
  }
  #replace-qtd p {
    display: flex;
    align-items: center;
    padding: .6rem;
    border-top: 1px solid #BFBFBF;
    border-bottom: 1px solid #BFBFBF;
    background-color: transparent;
  }
  h2 {
    flex: 2;
    font-size: 1rem;
    background-color: black;
    color: white; 
    padding: .5rem;
    border-radius: .3rem ;
    width: 7rem;
  }

  // responsividade
  @media (min-width: 480px) {
    width: 100%;
    #close-modal {
      display: none;
    }
    #close-modal-new {
      display: flex;
      flex-direction: row;
      justify-content: end;
      flex: 1;
      height: 100%;
      svg {
        background-color: black;
        color: white;
        border-radius: 50%;
        width: 1rem;
        height: 1rem;
        cursor: pointer;
      }
    }
    div {
      width: 100%;
      height: 6rem;
      display: flex;
      align-items: center;
      flex-direction: row;
      margin-bottom: 1rem;
      border-radius: .3rem;
      background-color: white;
    }
    
    h1 {
      display: flex;
      align-items: center;
      height: 100%;
      width: 100px;
    }
    img {
      width: 4rem;
      height: 4rem;
    }
    #section-replace-qtd {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-around;
      margin: 0;
    }
    #replace-qtd {
      display: flex;
      flex-direction: row;
      justify-content: center;
    }
    #replace-qtd #increment {
      display: flex;
      align-items: center;
      padding: .4rem;
      border: 1px solid #BFBFBF;
      background-color: transparent;
      font-size:.8rem;
      border-radius: 0rem .3rem .3rem 0;
    }
    #replace-qtd #decrement {
      display: flex;
      align-items: center;
      padding: .4rem;
      border: 1px solid #BFBFBF;
      background-color: transparent;
      font-size: .8rem;
      border-radius: .3rem 0 0 .3rem;
    }
    #replace-qtd p {
      display: flex;
      align-items: center;
      font-size: .8rem;
      padding: .4rem;
      border-top: 1px solid #BFBFBF;
      border-bottom: 1px solid #BFBFBF;
      background-color: transparent;
    }
    h2 {
      flex: 2;
      font-size: 1rem;
      color: black;
      background-color: white;
      padding: .5rem;
      border-radius: .3rem;
    }
  }
`
