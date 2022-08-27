import styled from 'styled-components'

export const HeaderPage = styled.header`
  background-color: #0F52BA;
  display: flex;
  justify-content: space-between;
  padding: 1rem 2rem;
  align-items: center;

  h1 {
    color: white;
    font-size: 2rem;
    font-weight: 600;
  }
  h1 span {
    font-size: 1.2rem;
    font-weight: 300;
  }

  section button {
    padding: .3rem 1rem;
    border-radius: .3rem;
    border: none;
    display: flex;
    align-items: center;
    font-size: 1rem;
    cursor: pointer;
  }
  button img {
    margin-right: .5rem;
  }
`