import { FaTrash } from "react-icons/fa";
import './App.css'
import { useState } from "react";

function App() {

  const [input, setInput] = useState("")
  const [tarefas, setTarefas] = useState([])
  const hendLeTarefa = () => {

    if (input !== '') {

      setTarefas(prevTarefas => [...prevTarefas, input])

      setInput('')
    }

  }

  const handLeDelete = (index) => {
    const novosItens = [...tarefas]

    novosItens.splice(index, 1)
    setTarefas(novosItens)
  }

  localStorage.setItem('lista', JSON.stringify(tarefas))

  return (
    <div className='container'>

      <div className="todolist">
        <h1 className='headLine'>To Do List</h1>

        <div className="inputs">

          <input
            type="text"
            placeholder='Digite sua tarefa (:'
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <button onClick={hendLeTarefa}>Adicionar</button>

        </div>
        <div className="tarefas">
          <ul>
            {
              tarefas.map((tarefa, index) => (
                <li className='tarefa' key={index}>
                  {tarefa}
                  <button onClick={() => handLeDelete(index)}><FaTrash size={20} className='icon-trash' /></button>
                </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
