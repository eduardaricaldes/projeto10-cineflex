import { Link } from "react-router-dom";

export default function Filme({ id, posterURL }) {
  return (
    <Link key={id} to={`/filme/${id}`}>
      <img data-identifier="movie-outdoor" src={posterURL} alt=""/>
    </Link>
  )
}