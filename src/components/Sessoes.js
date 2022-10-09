import { Link } from "react-router-dom";

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
    <>
    {
      filme?.days?.map((f) => {
        return (
          <Days key={f.id} day={f}  />
        )
      })
    }
    </>
  )
}