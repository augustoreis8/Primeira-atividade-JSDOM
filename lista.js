//Tentei mas não consegui fazer a função para o botão de editar e nem para o de salvar.

function DeleteItem(){
    console.log(this.parentElement)
    this.parentElement.remove()
}

function EditItem(){
    
}

function ToSaveItem(){

}

function CriarBotaoDelete(){
    const botao_delete =  document.createElement('button')
    botao_delete.classList.add("btn", "btn-outline-danger")
    botao_delete.innerHTML = "Delete"
    botao_delete.type = "button"
    botao_delete.addEventListener("click", DeleteItem);

    return botao_delete
}

function CriarBotaoEdit(){
    const botao_edit = document.createElement('button')
    botao_edit.classList.add("btn", "btn-outline-warning")
    botao_edit.innerHTML = "Edit"
    botao_edit.type = "button"
    botao_edit.addEventListener("click", EditItem)

    return botao_edit
}
function CriarBotaToSave(){
    const botao_tosave = document.createElement('button')
    botao_tosave.classList.add("btn", "btn-outline-info")
    botao_tosave.innerHTML ="Salvar"
    botao_tosave.type ="button"
    botao_tosave.addEventListener("click", ToSaveItem)

    return botao_tosave
}

function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(CriarBotaoDelete())
    lista.appendChild (novo_item_lista)
    novo_item_lista.appendChild(CriarBotaoEdit())
    lista.appendChild(novo_item_lista)
    novo_item_lista.appendChild(CriarBotaToSave())
    lista.appendChild(novo_item_lista)

    document.getElementById("item").value = ""
}













// function myFunction(){
//     console.log("teste inicial");
// }

// function addItem(){
//     const inputItem = document.querySelector('[data-form-input]')
//     const valorItem = inputItem.value

//     const listaDeItems = document.querySelector('[data-task]')

//     novaLabel = document.createElement('label')
//     novaLabel.innerText = valorItem
    
//     novoItem = document.createElement('li')

//     // novoItem.appendChild(criarBotaoConcluir())
//     novoItem.appendChild(novaLabel)
//     // novoItem.appendChild(criarBotaoDelete())

//     listaDeItems.appendChild(novoItem)

//     inputItem.value = ""
//}