// *********************************
// Tabela4.js
// *********************************

import React from 'react';

/**
 * componente que será utilizada na construção da Tabela
 */
function CabecalhoTabela() {
    return (
        <thead>
            <tr>
                <th>Nome</th>
                <th>Apelido</th>
                <th></th>
            </tr>
        </thead>
    );
}

/**
 * componente que representa o Corpo da Tabela
 * arrow function
 * Esta versão da componente recebe como parâmetro o conjunto das 'props'
 * existentes no projeto
 */
const CorpoTabela = (props) => {
    // vamos recuperar os dados do parâmetro de entrada: nomesDosAlunos
    //      -> é o que faz esta parte da instrução: props.nomesDosAlunos
    // o 'map' funciona como um 'foreach' que irá iterar todos os items dos dados lidos
    const linhas = props.inNomesDosAlunos.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.apelido}</td>
                <td>{/* o parâmetro 'outAlunoARemover' será usado para o
                        componente <CorpoTabela /> exportar
                        o ID do aluno a remover do STATE */}
                    <button className="btn btn-danger"
                        onClick={() => props.outAlunoARemover(index)}
                    >apagar</button>
                </td>
            </tr>
        );
    }
    )

    return (<tbody>{linhas}</tbody>);
}


/**
 * componente Tabela
 */
class Tabela4 extends React.Component {

    render() {
        // ler os dados que foram/são fornecidos à Tabela4,
        // como parâmetro de entrada/saída
        const { inDadosAlunos,
                outAlunoQueQueroRemover } = this.props;

        return (
            <table className="table">
                <CabecalhoTabela />
                {/* CorpoTabela tem um 'parâmetro de entrada', chamado 'inNomesDosAlunos'.
                    Apesar do nome do parâmetro ser diferente do atribuído à Tabela3,
                    a sua função é igual.
                */}
                <CorpoTabela inNomesDosAlunos={inDadosAlunos}
                             outAlunoARemover={outAlunoQueQueroRemover} />
            </table>
        );
    }
}

export default Tabela4;
