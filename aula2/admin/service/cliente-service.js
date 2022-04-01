

const listaClientes = () =>  {
    return fetch(`http://localhost:3000/profile`)
    .then(resposta => {
        return resposta.json()
    })

    
     // const promise = new Promise((resolve, reject) =>{
     //     const http = new XMLHttpRequest();
 
     //     http.open('GET','http://localhost:3000/profile');
 
     //     http.onload = () =>{
         
     //        if(http.status>= 400){
     //            reject(JSON.parse(http.response));
     //        }
     //        else{
     //            resolve(JSON.parse(http.response)); 
     //        }
                 
     //     }
     //     http.send();
     // })
     // return promise;   
}


const criaCliente = (nome, email) => {
    return fetch (`http://localhost:3000/profile`, {
        method : 'POST',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome:nome ,
            email:email
        })

      })
    .then(resposta =>{
        
        return resposta.body
    })
}

const removeCliente = (id) =>{
    return fetch (`http://localhost:3000/profile/${id}`, {
        method : 'DELETE',
    })
}

const detalhaCliente = (id) =>{
    return fetch (`http://localhost:3000/profile/${id}`) 
    .then(resposta =>{
       return resposta.json()
    })
}


const atualizaCliente = (nome, email,id) => {
    return fetch (`http://localhost:3000/profile/${id}`, {
        method : 'PUT',
        headers : {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            nome:nome ,
            email:email
        })

      })
    .then(resposta =>{
        
        return resposta.body
    })
}

export const clienteService = { 
    listaClientes,
    criaCliente,
    removeCliente,
    detalhaCliente,
    atualizaCliente
}