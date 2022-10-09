import styled from "styled-components";
import { Link } from "react-router-dom";
import axios from "axios"
import{ useParams } from"react-router-dom";
import { useEffect, useState } from "react";

import Assento from "./Assento";

export default function RotaSessao (){
  const [assentos, setAssentos]= useState([])
  const {sessaoId} = useParams()
  useEffect(()=>{
    const promise= axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`)

    promise.then((res)=>{
      setAssentos(res.data)
    })

    promise.catch((erro)=>{
    console.log(erro.response.data)

     })
  }, [sessaoId])

  return(<>
    <EstiloRotaSessao>
      <EstiloSessaoContainer>
        <EstiloSessaoMain>
        <h2>Selecione o(s) assento(s)</h2>
          <DivBotao>
            {
              assentos?.seats
                ?.map(assento=>{
                  return (
                    <Assento key={assento.id} assento={assento}/>
                  )
                })
            }
          </DivBotao>
          <Bolinhas>
            <div className="selecionado">
              <BolinhaVerde/>
              <p>selecionado</p>
            </div>
            <div className="disponivel">
              <BolinhaAzul/>
              <p>disponivel</p>
            </div>
            <div className="indisponivel">
              <BolinhaAmarelo/>
              <p>indisponivel</p>
            </div>
          </Bolinhas>
        </EstiloSessaoMain>
          <InformacoeSessao>
            <p>Nome do Comprador</p>
            <input type="text"></input>
            <p>CPF do comprador</p>
            <input type="number"></input>
          </InformacoeSessao>
            <ButtonReservarAssentos>
              <Link to="/sucesso" ><button>Reservar Assentos</button></Link>
            </ButtonReservarAssentos>
        </EstiloSessaoContainer>
      <EstiloSelecionarFilmesfooter>
          <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"alt=""></img>
          <p className="Nomefilme">Enola Homes</p>
          <p className="Horafilme">horario</p>
        </EstiloSelecionarFilmesfooter>
  </EstiloRotaSessao>
  </>

  )
}

const EstiloRotaSessao = styled.div`

`
const EstiloSelecionarFilmesfooter = styled.div`
  background-color: #c3cfd9;
  display: flex;
  align-items: center;
  margin-top: 18px;
  padding: 22px 10px 22px 18px;

    p {
      font-family: 'Roboto', sans-serif;
      color: #293845;
      font-size: 20px;
      margin-left: 14px;
      flex-direction: column;
    }

    img{
      width: 48px;
    }
`

const ButtonReservarAssentos = styled.div`
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
const EstiloSessaoContainer = styled.div`
  padding: 0px 30px 0px 30px;
`
const InformacoeSessao = styled.div`

`

const Bolinhas = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 76px;
  align-items: center;
   p{
      font-family: 'Roboto', sans-serif;
      font-size: 10px;
      color: #293845;
      margin-right: 76px;
      align-items: center;
    }
`  
const BolinhaAmarelo = styled.div`
  border-radius: 50%;
  height: 26px;
  width: 26px;
  border: 1px solid #F7C52B;
  background-color: #FBE192;
  margin-right: 8px;
  margin-top: 18px;
`
const BolinhaAzul = styled.div`
  border-radius: 50%;
  height: 26px;
  width: 26px;
  border: 1px solid #808F9D;
  background-color: #C3CFD9;
  margin-right: 8px;
  margin-top: 18px;
`
const BolinhaVerde = styled.div`
  border-radius: 50%;
  height: 26px;
  width: 26px;
  border: 1px solid #0E7D71;
  background-color: #1AAE9E;
  margin-right: 8px;
  margin-top: 18px;
`

const DivBotao = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
`



const EstiloSessaoMain = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
    h2{
      font-family: 'Roboto', sans-serif;
      font-size: 20px;
      color: #293845;
     }
`