import styled from "styled-components";

export default function Footer({ filme, day }) {

  return (
    <EstiloSelecionarFilmesfooter>
      <EstiloCartas>
        <img data-identifier="movie-img-preview" src={filme?.posterURL} alt=""/>
      </EstiloCartas>
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
  bottom: 0;
  border: 1px solid #9EADBA;

    p {
      font-family: 'Roboto', sans-serif;
      color: #293845;
      font-size: 22px;
      margin-left: 14px;
      font-weight: 300;
      line-height: 30px;
    }
    
`

const EstiloCartas = styled.div`

width: 70px;
height: 89px;
background: #FFFFFF;
box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
border-radius: 2px;
display: flex;
justify-content:center;
align-items: center;
  img{
      width: 48px;
  }
`

const EstiloSelecionarFilmeDescricao = styled.div `
  display: flex;
  flex-direction: column;
`;