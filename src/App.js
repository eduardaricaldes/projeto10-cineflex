import { BrowserRouter, Routes, Route } from "react-router-dom";
import styled from "styled-components";
import Rota from "./components/Rota";
import RotaFilme from "./components/Rota-Filme";
import RotaSessao from "./components/Rota-Sessao";
import RotaSucesso from "./components/Rota-Sucesso";

export default function App() {
  return (<>
  <BrowserRouter>
    <EstiloTop>
      <h1>Cineflex</h1>
    </EstiloTop>
    <Routes>
      <Route path="/" element={<Rota/>}></Route>
      <Route path="/filme/:IdFilme" element={<RotaFilme />}></Route>
      <Route path="/sessao/:sessaoId" element={< RotaSessao/>}></Route>
      <Route path="/sucesso" element={<RotaSucesso/>}></Route>
    </Routes>
  </BrowserRouter>
    
   </>
    
  )
}

const EstiloTop = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #c3cfd9;

    h1{
      font-family: 'Roboto', sans-serif;
      color: #e8833a;
      font-size: 34px;
      padding: 22px 10px 22px 18px;
    }
  `
  

