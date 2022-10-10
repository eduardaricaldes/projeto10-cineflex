import { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios"

import Filme from "./Filme";

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
        <h2>Selecionar Filme</h2>
        <Postes>
          {
            postes.map(post=> {
              return (
                <Filme
                  key={post.id}
                  id={post.id}
                  posterURL={post.posterURL}
                />
              )
            })
          }
        </Postes>
      </EstiloMain>
    </>
  )
}


const Postes = styled.div`
 display: flex;
 flex-wrap: wrap;
`

const EstiloMain = styled.div`
  padding: 0px 30px 0px 30px;
  margin-bottom: 50px;
  margin-top:50px;
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

