import styled from "styled-components";
import{ useParams } from"react-router-dom";
import axios from "axios"
import { useEffect, useState } from "react";
import Sessoes from "./Sessoes";
import Footer from "./Footer";

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
  },[IdFilme]);


  return(
    <>
      <EstiloSelecionarFilmes>
        <h1 className="titulo">Selecionar Horario</h1>
        <EstiloSelecionarFilmesMain>
          <Sessoes filme={filme} />
        </EstiloSelecionarFilmesMain>
        <Footer filme={filme}/>
      </EstiloSelecionarFilmes>
    </>
    
  )
}


const EstiloSelecionarFilmesMain = styled.div`
  padding: 0px 30px 0px 30px;
    p {
      font-family: 'Roboto', sans-serif;
      color: #293845;
      font-size: 20px;
    }
    button{
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