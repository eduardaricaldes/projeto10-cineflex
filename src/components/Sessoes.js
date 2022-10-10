import { Link } from "react-router-dom";
import styled from "styled-components";

function Days({ day }) {
  const filme = day

  function ShowTimes(props) {
    const sessions = props.showtimes
    return (
      <>
        {
          sessions.map((session) => {
            return (
              <Link key={session.id} to={`/sessao/${session.id}`}>
                <button data-identifier="hour-minute-btn">{session.name}</button>
              </Link>
            )
          })
        }  
      </>
    )
  }

  return (
    <>
      <p data-identifier="session-date">{filme.weekday} {filme.date}</p>
      <ShowTimes showtimes={filme.showtimes}/>
    </>
  )

}

export default function Sessoes({ filme }) {
  return (
    <EstiloSelecionarFilmesMain>
    {
      filme?.days?.map((f) => {
        return (
          <Days key={f.id} day={f}  />
        )
      })
    }
    </EstiloSelecionarFilmesMain>
  )
}

const EstiloSelecionarFilmesMain = styled.div`
  padding: 0px 30px 0px 30px;
    p {
      font-family: 'Roboto', sans-serif;
      color: #293845;
      font-size: 20px;
      margin-bottom: 22px;
      margin-top: 22px;
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
      font-size: 18px;
      font-weight: 300;
    }

`