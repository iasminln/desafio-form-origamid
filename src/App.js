import React, { useState } from "react";
import Radio from "./components/Radio";
import './style.css'

function App() {

  const perguntas = [
    {
      pergunta: 'Qual método é utilizado para criar componentes?',
      options: [
        'React.makeComponent()',
        'React.createComponent()',
        'React.createElement()',
      ],
      resposta: 'React.createElement()',
      id: 'p1',
    },
    {
      pergunta: 'Como importamos um componente externo?',
      options: [
        'import Component from "./Component"',
        'require("./Component")',
        'import "./Component"',
      ],
      resposta: 'import Component from "./Component"',
      id: 'p2',
    },
    {
      pergunta: 'Qual hook não é nativo?',
      options: ['useEffect()', 'useFetch()', 'useCallback()'],
      resposta: 'useFetch()',
      id: 'p3',
    },
    {
      pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
      options: ['set', 'get', 'use'],
      resposta: 'use',
      id: 'p4',
    },
  ];

  const [resposta, setResposta] = useState({
    p1: '',
    p2: '',
    p3: '',
    p4: ''
  })

  const handleChange = ({ target }) => {
    setResposta({ ...resposta, [target.id]: target.value })
  }

  const handleClick = () => {
    setSlide(slide + 1)
  }

  const [slide, setSlide] = useState(0)


  return (
    <div>
      {perguntas.map((item, index) =>

        <form className="formulario" key={item.id}>
          <Radio {...item} onChange={handleChange} active={slide === index} />
        </form>
      )}
      <button onClick={handleClick}>Próxima</button>
    </div>
  );
}

export default App;
