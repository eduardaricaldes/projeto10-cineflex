import styled from "styled-components";

export default function Footer({ filme, day }) {

  return (
    <EstiloSelecionarFilmesfooter>
      <img data-identifier="movie-img-preview" src={filme?.posterURL} alt=""></img>
      <EstiloSelecionarFilmeDescricao data-identifier="movie-and-session-infos-preview">
        <p className="Nomefilme">{filme?.title}</p>
        {
          day ? (
            <p className="Horafilme">{day?.weekday} {day?.date}</p>
          ): <></>
        }
      </EstiloSelecionarFilmeDescricao>
    </EstiloSelecionarFilmesfooter>
  );
}

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
      display: block;
    }

    img{
      width: 48px;
    }
`

const EstiloSelecionarFilmeDescricao = styled.div `
  display: flex;
  flex-direction: column;
`;