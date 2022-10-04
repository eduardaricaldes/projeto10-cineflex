import styled from "styled-components";

export default function App() {
  return (
    <div className="container">
      <div className="header">
        <h1>Cineflex</h1>
      </div>
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