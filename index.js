//Armazenando o valor digitado no campo dentro de uma variavel.
//Selecionando a segunda div.
//Criando um novo elemento dentro da div
//Adicionando o novo elemento dentro da div
//Imprimindo o resultado que foi digitado no campo
//Atribuindo uma classe para os campos anteriores

let botao = document.querySelector('#botao');
botao.addEventListener('click', function () {
    let resultado_campo = document.querySelector('#resultado_campo').value;
    let div_add = document.querySelector('#adicionando').cloneNode(true);
    document.querySelector('#adicionando').after(div_add);
    let newElement = document.createElement('p');
    div_add.appendChild(newElement);
    div_add.innerText = resultado_campo;
    div_add.setAttribute('class', 'newClass');
});






