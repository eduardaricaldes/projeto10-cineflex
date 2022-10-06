import { Link } from "react-router-dom";
import styled from "styled-components";
import axios from "axios"
import { useEffect, useState } from "react";
export default function Rota (){
  const [postes,setPostes]= useState([])
  useEffect(()=>{
    const requisição=axios.get("https://mock-api.driven.com.br/api/v5/cineflex/movies");
    requisição.then(resposta=>{
      setPostes(resposta.data);
    });

    requisição.catch(erro=>{
      console.log(erro.response.data);
    });

  },[]);
  
  return (
    <>
      <EstiloMain>
        <p>Selecionar Filme</p>
        <EstiloPostes>
          {postes.map(poste=><Link key={poste.id} to={`/filme/${poste.id}`}><img src={poste.posterURL} alt=""/></Link>)}
        </EstiloPostes>
      </EstiloMain>
    </>
  )
}

const EstiloPostes = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  img {
    width: 120px;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 46px;
    margin-bottom: 28px;
  }
`

const EstiloMain = styled.div`
  padding: 0px 30px 0px 30px;
    p {
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

