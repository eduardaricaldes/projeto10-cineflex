import{ useParams } from"react-router-dom";
import axios from "axios"
import styled from "styled-components";
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
        <h2 className="titulo">Selecionar Horario</h2>
        <Sessoes filme={filme} />
      </EstiloSelecionarFilmes>
      <Footer filme={filme}/>
    </>
    
  )
}

const EstiloSelecionarFilmes = styled.div`
  padding-top: 50px;
  margin-bottom: 50px;
h2 {
    font-family: 'Roboto', sans-serif;
    color: #293845;
    font-size: 24px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
    font-weight: 300;
  }

`