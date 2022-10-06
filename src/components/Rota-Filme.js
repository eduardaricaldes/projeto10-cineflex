import styled from "styled-components";
export default function RotaFilme (){
  return(
    <>
    <EstiloSelecionarFilmes>
        <h1 className="titulo">Selecionar Horario</h1>
        <EstiloSelecionarFilmesMain>
          <p className="data">data</p>
        <input type="button"></input>
        </EstiloSelecionarFilmesMain>
        <EstiloSelecionarFilmesfooter>
          <img src="https://image.tmdb.org/t/p/w600_and_h900_bestv2/tnAuB8q5vv7Ax9UAEje5Xi4BXik.jpg"alt=""></img>
          <p>Enola Homes</p>
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