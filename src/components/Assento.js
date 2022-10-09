import styled from "styled-components";

export default function Assento({ assento, listaDeAssentos = [], selecionarAssentos = () => {} }) {

  if(!assento.isAvailable) {
    return (
      <DivGroup key={assento.id}>
        <EstiloBotaoIndisponivel>
          <input disabled type="checkbox" value={assento.id}/>
          <span>{assento.name}</span>
        </EstiloBotaoIndisponivel>
      </DivGroup>
    )
  }


  return (
    <DivGroup key={assento.id}>
      <EstiloBotao>
        <input
          type="checkbox"
          value={assento.id}
          name={assento.name}
          onChange={event => selecionarAssentos(event)}
        />
        <span>{assento.name}</span>
      </EstiloBotao>
    </DivGroup>
  )
}

const DivGroup = styled.div`
  overflow: hidden;
  border-radius: 50%;
  height: 26px;
  width: 26px;
  border: 1px solid #808F9D;
  background-color: #C3CFD9;
  margin-right: 8px;
  margin-top: 18px;
  float: left;
`

const EstiloBotao = styled.label`
  float:left;
  height: 26px;
  width: 26px;
  line-height: 6px;
  input[type=checkbox]{
    outline: none;
    appearance: none;
    position: absolute;
    display: none;
  }
  input[type=checkbox]:checked {
    background-color: blue;
  }
  input[type=checkbox]:checked + span {
    background-color:#1AAE9E;
    border-color: #0E7D71;
    color: #000;
  }
  span {
    font-size: 11px;
    text-align: center;
    padding: 10px 7px;
    display: block;
  }
`;

const EstiloBotaoIndisponivel = styled.label`
  float: left;
  height: 26px;
  width: 26px;
  line-height: 6px;
  input[type=checkbox]{
    outline: none;
    appearance: none;
    position: absolute;
    display: none;
  }
  input[type=checkbox]:disabled + span {
    background-color:#FBE192;
    border-color: #F7C52B;
    color: #000;
  }
  span {
    font-size: 11px;
    text-align: center;
    padding: 10px 7px;
    display: block;
  }
`