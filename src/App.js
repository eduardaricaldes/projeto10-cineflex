import styled from "styled-components";

export default function App() {
  return (
    <div className="container">
      <EstiloHeader>
        <h1>Cineflex</h1>
        git</EstiloHeader>
      <div className="main">
        <div className="sucesso"></div>
      </div>
      <div className="footer"></div>
    </div>
    
  )
}

const EstiloHeader = styled.div `
  .header{
    background-color: green;

  }
    h1{
    font-size: 20px;
    }
  `