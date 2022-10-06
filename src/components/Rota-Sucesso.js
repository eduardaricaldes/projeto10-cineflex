import styled from "styled-components";
import { Link } from "react-router-dom";
export default function RotaSucesso(){
  return(
    <>
    <RotaSucessoEstilo>
      <RotaSucessoTop>
         <h2>Pedido Feito com Sucesso!</h2>
      </RotaSucessoTop>
      <RotaSucessoMain>
        <RotaSucessoInfomacoes>
          <h3>Filme e Sessão</h3>
          <p>Filme</p>
          <p>Sessão</p>
        </RotaSucessoInfomacoes>
        <RotaSucessoInfomacoes>
          <h3>Ingressos</h3>
          <p>Assento</p>
          <p>Assentos</p>
        </RotaSucessoInfomacoes>
        <RotaSucessoInfomacoes>
          <h3>Comprador</h3>
          <p>NOME:</p>
          <p>CPF:</p>
        </RotaSucessoInfomacoes>
      </RotaSucessoMain>
      <ButtonVoltarHome>
        <Link to="/"><button>Reservar Assentos</button></Link>
      </ButtonVoltarHome>
    </RotaSucessoEstilo>
    </>
  )
}

const ButtonVoltarHome = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 18px;
    button{
      background-color: #E8833A;
      border-radius: 3px;
      border: none;
      color: #ffff;
      font-family: 'Roboto';
      width: 200px;
      height: 42px;
    }
`
const RotaSucessoInfomacoes = styled.div`
  h3{
    font-family: 'Roboto', sans-serif;
    color: #293845;
    font-size: 24px;
    margin-left: 14px;
  }

  p{
    font-family: 'Roboto', sans-serif;
    color: #293845;
    font-size: 20px;
    margin-left: 14px;
  }
`
const RotaSucessoMain = styled.div``
const RotaSucessoEstilo = styled.div``

const RotaSucessoTop = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
    h2{
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      color: #247A6B;
     }
`
