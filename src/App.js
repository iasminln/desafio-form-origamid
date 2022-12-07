import React, { useState } from "react";
import Radio from "./components/Radio";
import { perguntas } from "./components/perguntas";
import './style.css'

function App() {
  const [slide, setSlide] = useState(0)

  const [resposta, setResposta] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: ''
  })

  const handleChange = ({ target }) => {
    setResposta({ ...resposta, [target.id]: target.value })
  }

  const verificacao = () => {
    const respostasCertas = perguntas.filter((item) => resposta[item.id] === item.resposta)
    return respostasCertas.length
  }

  return (
    <div className="container">
      {slide === perguntas.length ? <>Você acertou {verificacao()} de {perguntas.length} respostas!</> :
        <>
          {perguntas.map((item, index) =>
            <form className="formulario" key={item.id}>
              <Radio {...item} onChange={handleChange} active={slide === index} index={index} />
            </form>
          )}
          <button onClick={() => { setSlide(slide + 1) }}>Próxima</button>
        </>
      }
    </div>
  );
}

export default App;
