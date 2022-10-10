import styled from "styled-components";
import { Link, useLocation } from "react-router-dom";
export default function RotaSucesso(){
  const {
    state
  } = useLocation();
  const {
    nome,
    cpf,
    listaDeAssentos = [],
    filme,
    sessao,
    horario,
  } = state;
  return(
    <>
    <RotaSucessoEstilo>
      <RotaSucessoTop>
         <h2>Pedido feito com sucesso!</h2>
      </RotaSucessoTop>
      <RotaSucessoMain>
        <RotaSucessoInfomacoes>
          <h3>Filme e sessão</h3>
          <div className="filme-data" data-identifier="movie-session-infos-reserve-finished">
            <p>{filme.title}</p>
            <p>{sessao.date} {horario}</p>
          </div>
        </RotaSucessoInfomacoes>
        <RotaSucessoInfomacoes>
          <h3>Ingressos</h3>
          <div className="assentos" data-identifier="seat-infos-reserve-finished">
            {
              listaDeAssentos.map((assento) => {
                return (
                  <p key={assento.id}>Assento {assento.name}</p>
                )
              })
            }
          </div>
        </RotaSucessoInfomacoes>
        <RotaSucessoInfomacoes>
          <h3>Comprador</h3>
          <div className="informacao-comprador" data-identifier="buyer-infos-reserve-finished">
            <p>NOME: {nome}</p>
            <p>CPF: {cpf}</p>
          </div>
        </RotaSucessoInfomacoes>
      </RotaSucessoMain>
      <ButtonVoltarHome>
        <Link to="/"><button data-identifier="back-to-home-btn">Voltar Para Home</button></Link>
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
      font-size: 18px;
      font-weight: 300;
    }
`
const RotaSucessoInfomacoes = styled.div`
  margin-bottom: 40px;
  h3{
    font-family: 'Roboto', sans-serif;
    color: #293845;
    font-size: 24px;
    margin-left: 14px;
    font-weight: bold;
    margin-bottom: 14px;
  }

  p{
    font-family: 'Roboto', sans-serif;
    color: #293845;
    font-size: 22px;
    margin-left: 14px;
    font-weight: 300;
    margin-bottom: 5px;
  }
`
const RotaSucessoMain = styled.div`
  margin-bottom: 70px;
`
const RotaSucessoEstilo = styled.div`
padding: 0px 30px 0px 30px;
`

const RotaSucessoTop = styled.div`
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  padding: 40px 80px ;
    h2{
      font-family: 'Roboto', sans-serif;
      font-size: 24px;
      color: #247A6B;
      font-weight: bold;
     }
`
