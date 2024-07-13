import { useState } from "react"
import Principal from "./pages/Principal"
import Botao from "./components/Botao"
import Dados from "./components/Dados"
const App = () => {
  const nome = "Kay"
  const profissao = "programadora"
  const idade = 18
  

  return (
    <>
      <Principal />
      <Dados x={nome} y={profissao} z={idade} />
    </>

  )
}
export default App