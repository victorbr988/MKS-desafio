import styled from "styled-components";

export const Main = styled.main `
  min-height: 100vh;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  color: #2C2C2C;

  section {
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  section div #product-photo {
    padding: 1rem;
    height: 9rem;
  }

  section div {
    height: 20;
    margin: 1rem 1rem;
    display: flex;
    flex-direction: column;
    background-color: white;
    box-shadow: 0px 10px 10px 1px rgba(0,0,0,0.1);
    width: 16rem;
    justify-content: center;
    border-radius: .5rem;
  }
  section div .section {
    flex: 2;
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    padding: .5rem;
  }
  section div .section h1 {
    flex: 1;
    margin: 0 .5rem;
    font-size: 1rem;
    width: 200px;
  }
  section div .section h2 {
    flex-shrink: 1;
    font-size: 1rem;
    padding: .2rem;
    border-radius: .3rem;
    color: white;
    background-color: #373737;
  }
  section div p {
    flex: 1;
    margin: 0 .5rem;
    font-size: .8rem;
  }
  section button {
    padding: .5rem;
    background-color: #0F52BA;
    color: white;
    font-size: 1rem;
    margin-top: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 0 0 .5rem .5rem;
    display: flex;
    justify-content: center;
    gap: 1rem;
    align-items: center;
  }
  footer {
    background-color: #EEEEEE;
    width: 100%;
    margin-top: 5rem;
  }
`