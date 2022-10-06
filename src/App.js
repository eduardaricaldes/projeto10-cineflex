import styled from "styled-components";

export default function App() {
  return (
    <EstiloContainer>
      <EstiloHeader>
        <h1>Cineflex</h1>
        </EstiloHeader>
      <div className="main">
        <div className="sucesso"></div>
      </div>
      <div className="footer"></div>
    </EstiloContainer>
    
      
    
  )
}
const EstiloContainer = styled.div`
  .container {
    background-color: #eef9bf;
  }
`

const EstiloHeader = styled.div `
    background-color: green;n
    h1{
    font-size: 20px;
    }
  `