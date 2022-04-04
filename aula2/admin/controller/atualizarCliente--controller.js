import { clienteService } from '../service/cliente-service.js'

const pegaURL = new URL(window.location);
console.log(pegaURL)

const id = pegaURL.searchParams.get('id');

const inputNome = document.querySelector('[data-nome]') 
const inputEmail = document.querySelector('[data-email]') 

try {   
    clienteService.detalhaCliente(id).then(dado=>{
        inputNome.value = dado.nome;
        inputEmail.value = dado.email;
    })
}
catch(error) {
    console.error(error)
    window.location.href ='../telas/erro.html'
}


const formulario = document.querySelector('[data-form]');

formulario.addEventListener('submit',async (evento)=>{
   evento.preventDefault();

   try{
       await clienteService.atualizaCliente(inputNome.value,inputEmail.value,id)
       window.location.href = '../telas/edicao_concluida.html'
    }
    catch(error) {
        console.error(error)
        window.location.href ='../telas/erro.html'
    }    
})