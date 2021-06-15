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

  /**
   * função que irá retirar o aluno do array criado pelo STATE
   * @param {*} idDoAlunoARemover - id do aluno selecionado na tabela
   */
  removeAluno = (idDoAlunoARemover) => {
    // quero manipular o STATE
    // recuperar os dados do State
    const { alunos } = this.state;
    // alterar os dados do STATE
    this.setState({
      alunos: alunos.filter((aluno, indiceDoAluno) => {
        return indiceDoAluno !== idDoAlunoARemover
      })
    });


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
            <h4>Tabela com acesso<br />a dados <i>state</i></h4>
            {/* Tabela3 tem um 'parâmetro de entrada', chamado 'inDadosAlunos'.
                Neste caso, está a receber o array JSON com os dados dos alunos */}
            <Tabela inDadosAlunos={alunos}
                    outAlunoQueQueroRemover={this.removeAluno} />
          </div>
        </div>
      </div>
    );

  }
}



export default App;
