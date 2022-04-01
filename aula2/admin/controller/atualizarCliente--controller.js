import { clienteService } from '../service/cliente-service.js'

const pegaURL = new URL(window.location);
console.log(pegaURL)

const id = pegaURL.searchParams.get('id');

const inputNome = document.querySelector('[data-nome]') 
const inputEmail = document.querySelector('[data-email]') 

clienteService.detalhaCliente(id).then(dado=>{
    inputNome.value = dado.nome;
    inputEmail.value = dado.email;
})