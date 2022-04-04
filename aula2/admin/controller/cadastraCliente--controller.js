import { clienteService } from "../service/cliente-service.js";

const formulario = document.querySelector('[data-form]')

console.log(formulario)

formulario.addEventListener('submit', async (evento) =>{

    evento.preventDefault();
    try{

        const nome = evento.target.querySelector('[data-nome]').value;
        const email = evento.target.querySelector('[data-email]').value;
        
        await clienteService.criaCliente(nome,email)
        
        window.location.href = '../telas/cadastro_concluido.html'
    }
    catch(error) {
        console.error(error)
        window.location.href ='../telas/erro.html'
    }
    

})