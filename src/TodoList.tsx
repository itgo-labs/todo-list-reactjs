import /* React, */ { useState } from 'react';

interface Item {
  id: number;
  texto: string;
  feito: boolean;
}

function Todolist(): JSX.Element {
  const [tarefas, setTarefas] = useState<Item[]>([
    { id: 1, texto: 'Ir ao supermercado', feito: false },
    { id: 2, texto: 'Malhar', feito: false },
    { id: 3, texto: 'Estudar React', feito: false },
  ]);

  const [input, setInput] = useState<string>('');

  const alterarToggle = (id: number): void => {
    setTarefas((prevTarefas) =>
      prevTarefas.map((tarefa) =>
        tarefa.id === id ? { ...tarefa, feito: !tarefa.feito } : tarefa
      )
    );
  };

  const botaoAdicionar = (): void => {
    const novasTarefas: Item = { id: Date.now(), texto: input, feito: false };
    setTarefas((prevTarefas) => [...prevTarefas, novasTarefas]);
  };

  return (
    <div className="container mt-3">
      <h1>Lista de Tarefas</h1>

      <hr />

      <div className="row">
        <div className="col-auto">
            <input
            className="form-control form-control-lg"
            type="text"
            placeholder="Adicionar Item"
            onChange={(e) => setInput(e.currentTarget.value)}
          />
        </div>
        <div className="col-auto">
          <button className="btn btn-lg btn-primary" onClick={botaoAdicionar}>Adicionar</button>
        </div>
      </div>

      <hr />

      <ul className="list-group">
        {tarefas.map((tarefa) => (
          <li 
            className={tarefa.feito ? 'bg-success-subtle list-group-item' : 'list-group-item'}
            key={tarefa.id}
            onClick={() => alterarToggle(tarefa.id)}
            style={
              { 
                textDecoration: tarefa.feito ? 'line-through' : 'none' ,
                cursor: 'pointer',
              }
            }
          >
            {tarefa.texto}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todolist;
