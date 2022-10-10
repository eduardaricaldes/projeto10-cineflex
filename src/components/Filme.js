import { Link } from "react-router-dom";
import styled from "styled-components";

export default function Filme({ id, posterURL }) {
  return (
    <EstiloPostes>
      <Link key={id} to={`/filme/${id}`}>
        <img data-identifier="movie-outdoor" src={posterURL} alt=""/>
      </Link>
    </EstiloPostes>
  )
}

const EstiloPostes = styled.div`
  width: 145px;
  height: 209px;
  background: #FFFFFF;
  box-shadow: 0px 2px 4px 2px rgba(0, 0, 0, 0.1);
  border-radius: 3px;
  margin: 0 20px 20px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    width: 129px;
    height: 193px;
    text-align: center;
  }
`