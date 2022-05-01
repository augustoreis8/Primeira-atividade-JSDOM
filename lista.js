function DeleteItem(){
    this.parentElement.remove()
}

function EditItem(){
    
    item_lista = this.parentElement
    palavra_digitada=item_lista.innerText.replace("DeleteEdit", "")
    input_element = document.querySelector('[data-form-input]')
    input_element.value = palavra_digitada

    const botao_submit = document.querySelector('[button-submit')
    botao_submit.className = 'd-none'
    
    const botao_save = document.querySelector('[button-save')
    botao_save.classList.remove('d-none')
    
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

function Submit(){
    const lista = document.querySelector('[data-task]')
    const valor = document.querySelector('[data-form-input]')

    const novo_item_lista = document.createElement("li")
    novo_item_lista.className = "list-group-item";

    novo_item_lista.innerHTML = valor.value
 
    novo_item_lista.appendChild(CriarBotaoDelete())
    novo_item_lista.appendChild(CriarBotaoEdit())
    lista.appendChild(novo_item_lista)

    document.getElementById("item").value = ""
}

function Save(){
    
    nova_palavra_digitada = input_element.value
    item_lista.innerHTML = nova_palavra_digitada

    item_lista.appendChild(CriarBotaoDelete())
    item_lista.appendChild(CriarBotaoEdit())

    const botao_submit = document.querySelector('[button-submit')
    botao_submit.classList.remove('d-none')
    botao_submit.classList.add('btn', 'btn-outline-dark')
    
    const button_save = document.querySelector('[button-save')
    button_save.classList.add('d-none')

    input_element.value = ''
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