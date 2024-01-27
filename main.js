const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="./images/celular.jpg" alt = "incone celular" />';
const imgReprovado = '<img src="./images/telefone-fixo.png" alt = "incone telefone-fixo" />';
const atividades = [];
const notas = [];
const spanAprovado = '<span class="resultado aprovado">Aprovado</span>';
const spanReprovado = '<span class="resultado reprovado">Reprovado</span>';
let linhas = '';


form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMadiaFinal();
});

function adicionaLinha(){

    const inputNomeAtividade = document.getElementById('nome-atividade');
    const inputNotaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(inputNomeAtividade.value)){
        alert(`A atividade ${inputNomeAtividade.value}já foi inserida`);
    }else{

        atividades.push(inputNomeAtividade.value);
        notas.push(parseFloat(inputNotaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td id="nome-contato">${inputNomeAtividade.value}</td>`;
        linha += `<td id="numero-contato">${inputNotaAtividade.value}</td>`;
        linha += '</tr>';

        linhas += linha;

    }

    inputNomeAtividade.value =  '';
    inputNotaAtividade.value = '';
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}





