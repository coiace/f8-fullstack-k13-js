
const input = document.querySelector('.todo-input')
const button = document.querySelector('.todo-btn')
const form = document.querySelector('.TodoForm')
const todos = document.querySelector('.TodoWrapper')

const todoList = JSON.parse(localStorage.getItem('todos'))

if(todoList) {
    todoList.forEach(todo => addTodo(todo))
}

function addTodo(todo) {
    const div = document.createElement('div')
    div.classList.add('Todo')
    div.innerHTML = `
        <label>${todo.text}</label>
        <div>
            <i onclick="editing(event)" class="fa-solid fa-pen-to-square"></i>
            <i class="fa-solid fa-trash"></i>
        </div>
    `

    div.querySelector('label').onclick = function() {
        div.querySelector('label').classList.toggle('completed')
        updateTodo()
    }

    div.querySelector('.fa-trash').onclick = function() {
        this.parentElement.parentElement.remove()
        updateTodo()
    }
    todos.appendChild(div)
    updateTodo()
}

function editing(e) {
    const oldDiv = e.target.closest('.Todo')
    const oldText = oldDiv.querySelector('label').innerText

    const form = document.createElement('form')
    form.classList.add('TodoForm')

    form.innerHTML = `
        <input type="text" class="todo-input" placeholder="Edit task..." value="${oldText}">
        <button type="submit" class="todo-btn">Add Task</button>
    `

    oldDiv.replaceWith(form)

    const input = form.querySelector('.todo-input')
    
    form.onsubmit = function (e) {
        e.preventDefault()
        const newText = input.value.trim()

        if (newText !== '') {
            const newTodo = {
                text: newText,
                completed: false
            }
            addTodo(newTodo)
            updateTodo()
        }

        form.remove()
    }
}

form.onsubmit = function(e) {
    e.preventDefault()
    let text = input.value.trim()

    text !== '' ? addTodo({text, completed: false}) : undefined

    input.value = ''
    input.focus()
}

function updateTodo() {
    const list = document.querySelectorAll('.Todo')
    const todos = []

    list.forEach(item => {
        todos.push({
            text: item.querySelector('label').innerHTML,
			completed: item.classList.contains('completed'),
        })
    })

    localStorage.setItem('todos', JSON.stringify(todos))
}