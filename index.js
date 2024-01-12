const inputForm = document.querySelector('.input-form');
const inputSubmit = document.querySelector('.input-submit');
const divResult = document.querySelector('.result');
const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    const result = inputForm.value;
    exibirConteudo(result)

})
const exibirConteudo = (conteudo) => {
     
    if (inputForm.value === ""){
        return
    }
    else {
    const h2 = document.createElement('h2');
    
     h2.innerText = conteudo

     divResult.appendChild(h2);
    }

     

     
}









