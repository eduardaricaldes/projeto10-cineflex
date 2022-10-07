import { Link } from "react-router-dom";

function Days(props) {
  const filme = props.day

  function ShowTimes(props) {
    const sessions = props.showtimes
    return (
      <>
        {
          sessions.map((session) => {
            return (
              <Link key={session.id} to={`/sessao/${session.id}`}><input type="button" value={session.name}/></Link>
            )
          })
        }  
      </>
    )
  }

  return (
    <>
      <p>{filme.weekday} {filme.date}</p>
      <ShowTimes showtimes={filme.showtimes}/>
    </>
  )

}

export default function Sessoes(props) {
  const filme = props.filme
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