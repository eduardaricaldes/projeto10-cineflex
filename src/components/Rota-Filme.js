import styled from "styled-components";
import { Link } from "react-router-dom";
import{ useParams } from"react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
export default function RotaFilme (){
  const {IdFilme}= useParams();

  const[filme, setFilme]= useState([])
  
  useEffect(()=>{

    const requisicao = axios.get(`https://mock-api.driven.com.br/api/v5/cineflex/movies/${IdFilme}/showtimes`)

    requisicao.then(resposta=>{
      setFilme(resposta.data)
    });
    requisicao.catch(erro=>{
      console.log(erro.response.data);
    })
  },[]);

  function RenderDays(props) {
    return (
      <>
        {
          props.days.map((day) => {
            return (<Link to="/sessão"><input type="button">{day}</input></Link>)
          })
        }
      </>
    )
  }
  console.log(filme.days?.length)
  return(
    <>
    <EstiloSelecionarFilmes>
        <h1 className="titulo">Selecionar Horario</h1>
        <EstiloSelecionarFilmesMain>
          {
            filme.days?.length !== 0 ? 
            filme.days.map((f) => {
              const showtimes = f.showtimes
              return (
                <>
                  <p className="data">{f.date} {f.weekday}</p>
                  <RenderDays days={showtimes}/>
                </>
              )
            }):
            null
          }
          {filme.map(filme=><Link to="/sessão"><input type="button"></input></Link>)}

          <input type="button"></input>
        </EstiloSelecionarFilmesMain>
        <EstiloSelecionarFilmesfooter>
          {/* <img src={filme.} alt="dsd"> src=</img> */}
          <p>{filme.title}</p>
          {/* <p>{}</p> */}
        </EstiloSelecionarFilmesfooter>
      </EstiloSelecionarFilmes>
    </>
    
  )
}

const EstiloSelecionarFilmesfooter = styled.div`
  background-color: #c3cfd9;
  display: flex;
  align-items: center;
  padding: 22px 10px 22px 18px;

    p {
      font-family: 'Roboto', sans-serif;
      color: #293845;
      font-size: 20px;
      margin-left: 14px;
    }

    img{
      width: 48px;
    }

`

const EstiloSelecionarFilmesMain = styled.div`
  padding: 0px 30px 0px 30px;

    p {
      font-family: 'Roboto', sans-serif;
      color: #293845;
      font-size: 20px;
    }
    input{
      background-color: #E8833A;
      border-radius: 3px;
      border: none;
      color: #ffff;
      font-family: 'Roboto';
      width: 83px;
      height: 43px;
      margin-right: 8px;
    }

`

const EstiloSelecionarFilmes = styled.div`
h1 {
    font-family: 'Roboto', sans-serif;
    color: #293845;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top:50px;
    margin-bottom: 50px;
  }

`