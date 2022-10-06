import styled from "styled-components";
export default function Rota (){
  return (
    <>
      <EstiloMain>
        <p>Selecionar Filme</p>
        <EstiloPostes>
         <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"className="Poster"alt="poster"></img>
        </EstiloPostes>
      </EstiloMain>
    </>
  )
}



const EstiloPostes = styled.div`
  img {
    width: 120px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }
`

const EstiloMain = styled.div`
  padding: 0px 30px 0px 30px;
  
    img {
      width: 120px;
    }
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

