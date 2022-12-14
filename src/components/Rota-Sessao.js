import styled from "styled-components";
import axios from "axios"
import{ useNavigate, useParams } from"react-router-dom";
import { useEffect, useState } from "react";
import Footer from "./Footer";

import Assento from "./Assento";

export default function RotaSessao (){
  const navigate = useNavigate();
  const [assentos, setAssentos]= useState({});
  const {sessaoId} = useParams();
  const [listaDeAssentos, setListaDeAssentos] = useState([]);
  const [cpf, setCPF] = useState('');
  const [nome, setNome] = useState('');
  const [habilitarBotao, setHabilitarBotao] = useState(false);


  useEffect(()=>{
    const promise= axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/showtimes/${sessaoId}/seats`)

    promise.then((res)=>{
      setAssentos(res.data)
    })

    promise.catch((erro)=>{
    console.log(erro.response.data)

     })
  }, [sessaoId])

  useEffect(()=>{
    if(listaDeAssentos.length > 0 && cpf !== '' && nome !== '') {
      setHabilitarBotao(true)
    }else {
      setHabilitarBotao(false);
    }
  }, [cpf, listaDeAssentos.length, nome])

  function selecionarAssentos(event) {
    const checkbox = event.target
    if(checkbox && checkbox.checked) {
      const assento = {
        id: checkbox.value,
        name: checkbox.name,
      }
      listaDeAssentos.push(assento)
      setListaDeAssentos(listaDeAssentos)
    }else {
      const index = listaDeAssentos.findIndex(object => {
        return object.id === checkbox.value;
      });
      listaDeAssentos.splice(index, 1);
      setListaDeAssentos(listaDeAssentos)
    }
  }

  function onChangeNomeComprador(nomeDigitado) {
    if(nomeDigitado !== '') {
      setNome(nomeDigitado)
    }
  }

  function onChangeCPF(cpfDigitado) {
    if(cpfDigitado !== '') {
      setCPF(cpfDigitado)
    } 
  }

  function reservarAssentos() {
    const idsAssentos = listaDeAssentos.map((assento) => assento.id);
    axios.post('https://mock-api.driven.com.br/api/v5/cineflex/seats/book-many', {
      ids: idsAssentos,
      name: nome,
      cpf: cpf,
    })
    navigate('/sucesso', {
      state: {
        nome: nome,
        cpf: cpf,
        listaDeAssentos: listaDeAssentos,
        filme: assentos.movie,
        sessao: assentos.day,
        horario: assentos.name,
      }
    })
  }
  

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
                      <Assento
                        key={assento.id}
                        assento={assento}
                        listaDeAssentos={listaDeAssentos}
                        selecionarAssentos={selecionarAssentos}
                      />
                    )
                  })
              }
          </DivBotao>
          <Bolinhas>
            <div className="selecionado"  data-identifier="seat-selected-subtitle">
                <BolinhaVerde/>
                <p>Selecionado</p>
            </div>
            <div className="disponivel" data-identifier="seat-available-subtitle">
                <BolinhaAzul/>
                <p>Disponivel</p>
            </div>
            <div className="indisponivel" data-identifier="seat-unavailable-subtitle">
                <BolinhaAmarelo/>
                <p>Indisponivel</p>
            </div>
          </Bolinhas>
        </EstiloSessaoMain>
          <InformacoeSessao>
            <p>Nome do Comprador</p>
            <input
              data-identifier="buyer-name-input"
              type="text"
              onChange={event => onChangeNomeComprador(event.target.value)}
              placeholder="Digite seu nome..."
              />
            <p>CPF do comprador</p>
            <input
              data-identifier="buyer-cpf-input"
              type="text"
              onChange={event => onChangeCPF(event.target.value)}
              placeholder="Digite seu CPF..."
              />
          </InformacoeSessao>
          <ButtonReservarAssentos>
            <button data-identifier="reservation-btn" disabled={!habilitarBotao} onClick={reservarAssentos}>Reservar Assentos</button>
          </ButtonReservarAssentos>
        </EstiloSessaoContainer>
      <Footer filme={assentos.movie} day={assentos.day} />
  </EstiloRotaSessao>
  </>

  )
}

const EstiloRotaSessao = styled.div`
  margin-top:50px;
`

const ButtonReservarAssentos = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 58px;
  margin-bottom: 30px;
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
const EstiloSessaoContainer = styled.div`
  padding: 0px 30px 0px 30px;
`
const InformacoeSessao = styled.div`
  margin-top: 41px;
    p{
      font-family: 'Roboto', sans-serif;
      font-size: 18px;
      font-weight: 300;
      margin-bottom: 4px;
    }
    input[type=text]{
      font-family: 'Roboto', sans-serif;
      font-weight: 300;
      font-size: 18px;
      margin-bottom: 8px;
      border: 1px solid #D4D4D4;
      width: 327px;
      height: 51px;
      border-radius: 4px;
      padding-left: 18px;
    }

`


const EstiloSessaoMain = styled.div`
  display: flex;
  flex-direction: column;
    h2{
      text-align: center;
      font-family: 'Roboto', sans-serif;
      font-size: 24px;
      color: #293845;
      font-weight: 300;
      margin-bottom: 10px;
     }
`

const Bolinhas = styled.div`
  display: flex;
  justify-content: space-around;
  margin-bottom: 42px;
  margin-top: 26px;
   p{
      font-family: 'Roboto', sans-serif;
      font-size: 10px;
      color: #293845;
      line-height: 15px;
      margin-top: 5px;
    }
  .selecionado, .disponivel, .indisponivel {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }
`  
const BolinhaAmarelo = styled.div`
  border-radius: 50%;
  height: 26px;
  width: 26px;
  border: 1px solid #F7C52B;
  background-color: #FBE192;
`
const BolinhaAzul = styled.div`
  border-radius: 50%;
  height: 26px;
  width: 26px;
  border: 1px solid #808F9D;
  background-color: #C3CFD9;
`
const BolinhaVerde = styled.div`
  border-radius: 50%;
  height: 26px;
  width: 26px;
  border: 1px solid #0E7D71;
  background-color: #1AAE9E;
`

const DivBotao = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  font-family: 'Roboto', sans-serif;
  font-size: 11px;
`