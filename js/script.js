document.addEventListener("DOMContentLoaded", () => {
const itemInput = document.getElementById('itemInput')
itemInput.focus()
const list = document.getElementById('list')
const addButton = document.getElementById('addButton')
const shoppingList = []

addButton.addEventListener('click', add)

function add(){
    if (itemInput.value !== ''){
        shoppingList.push(itemInput.value)
        const li = document.createElement('li')
        for (const item of shoppingList){
            li.textContent = 'li'
            li.textContent = item.trim()
            list.append(li)
            const deleteButton = document.createElement('button')
            deleteButton.textContent = 'delete'
            li.append(deleteButton)
            const purchaseButton = document.createElement('button')
            purchaseButton.textContent = 'purchase'
            li.append(purchaseButton)
            const editButton = document.createElement('button')
            editButton.textContent = 'edit'
            li.append(editButton)
            deleteButton.addEventListener('click', deleteItem)
            function deleteItem(){
                li.remove()
            }
            purchaseButton.addEventListener('click', purchase)
            function purchase(){
                li.style.color = 'green'
                li.style.textDecoration = 'line-through'
                purchaseButton.textContent = 'purchased'
            } 
            editButton.addEventListener('click', edit)
            function edit(){  
                const editItem = prompt('Enter your new item! ').trim()
                if (editItem !== ''){
                    li.textContent = editItem
                    li.style.color = 'black'
                    li.style.textDecoration = 'none'
                    purchaseButton.textContent = 'purchase'
                    li.append(deleteButton)
                    li.append(purchaseButton)
                    li.append(editButton)
                }else {
                    alert('You have not entered any item!')
                }
            }
        }
        itemInput.value = ''
        itemInput.focus()
    }else {
        alert('No input has been entered!')
    }
}

const clearListButton = document.getElementById('clearListButton')
clearListButton.addEventListener('click', clear)

function clear(){
    list.textContent = ''
    itemInput.value = ''
}
})