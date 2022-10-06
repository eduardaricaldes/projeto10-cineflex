import styled from "styled-components";
import Rota from "./components/Rota"
import RotaFilme from "./components/Rota-Filme";
import RotaSessao from "./components/Rota-Sessão"

export default function App() {
  return (<>
    <EstiloTop>
      <h1>Cineflex</h1>
    </EstiloTop>
    <Rota></Rota>
    <RotaFilme></RotaFilme>
    <RotaSessao></RotaSessao>
    <RotaSucesso>
      <RotaSucessoMain>
        <h2>Pedido Feito com Sucesso!</h2>
      </RotaSucessoMain>
    </RotaSucesso>
   </>
    
  )
}

const RotaSucesso = styled.div``
const RotaSucessoMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
    h2{
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      color: #247A6B;
     }
`

const EstiloTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;
    h1{
      font-family: 'Roboto', sans-serif;
      color: #e8833a;
      font-size: 20px;
    }
  `
  

