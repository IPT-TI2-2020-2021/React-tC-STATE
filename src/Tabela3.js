// *********************************
// Tabela3.js
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
    const linhas = props.nomesDosAlunos.map((linha, index) => {
        return (
            <tr key={index}>
                <td>{linha.nome}</td>
                <td>{linha.apelido}</td>
            </tr>
        );
    }
    )

    return (<tbody>{linhas}</tbody>);
}


/**
 * componente Tabela
 */
class Tabela3 extends React.Component {

    render() {
        // ler os dados que foram/são fornecidos à Tabela3,
        // como parâmetro de entrada
        const { dadosAlunos } = this.props;

        return (
            <table className="table">
                <CabecalhoTabela />
                {/* CorpoTabela tem um 'parâmetro de entrada', chamado 'nomesDosAlunos'.
                    Apesar do nome do parâmetro ser diferente do atribuído à Tabela3,
                    a sua função é igual.
                */}
                <CorpoTabela nomesDosAlunos={dadosAlunos} />
            </table>
        );
    }
}

export default Tabela3;
