// ***********************************************
// app.js
// ***********************************************

import React from 'react';
import Tabela from './Tabela4';


/**
 * Componente 'principal' do meu projeto
 */
class App extends React.Component {

  // definição de um 'repositório de dados'
  // tem uma característica interessante: estes PODEM ser alterados
  // https://www.json.org/json-en.html
  state = {
    // dentro do STATE a igualdade é feita com :
    alunos: [
      {
        "nome": "José",
        "apelido": "Lopes"
      },
      {
        "nome": "Maria",
        "apelido": "Silva"
      },
    ]
  }



  render() {
    // ler os dados do repositório,
    // para poderem ser aqui usados
    const { alunos } = this.state;

    // este método É OBRIGATÓRIO
    return (
      <div className="container">
        <h1>Lista de Alunos</h1>
        <div className="row">
          <div className="col-4">
            <h4>Tabela com acesso<br />a dados <i>props</i></h4>
            {/* Tabela3 tem um 'parâmetro de entrada', chamado 'dadosAlunos'.
                Neste caso, está a receber o array JSON com os dados dos alunos */}
            <Tabela dadosAlunos={alunos} />
          </div>
        </div>
      </div>
    );

  }
}



export default App;
