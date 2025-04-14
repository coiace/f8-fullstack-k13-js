import { getData, postData, putData, deleteData } from "./api.js";
import { bindRows } from "./utils.js";

// DOM elements
const input = document.querySelector(".todo-input");
const form = document.querySelector(".TodoForm");
const todoWrapper = document.querySelector(".TodoWrapper");

const onUpdateTask = async (id, payload) => {
  await putData(id, payload);
  await renderTasks();
};

const onDeleteTask = async (id) => {
  await deleteData(id);
  await renderTasks();
};

const renderTasks = async () => {
  const jobs = await getData();

  todoWrapper.querySelectorAll(".Todo").forEach((el) => el.remove());

  bindRows(todoWrapper, jobs);

  document.querySelectorAll(".Todo").forEach((todo) => {
    const jobId = todo.getAttribute("data-id");
    const textElement = todo.querySelector("p");
    const btnDelete = todo.querySelector(".fa-trash");
    const btnEdit = todo.querySelector(".fa-pen-to-square");

    textElement.onclick = async () => {
      const isCompleted = todo.classList.contains("completed");
      await onUpdateTask(jobId, {
        title: textElement.innerText,
        completed: !isCompleted,
      });
    };

    btnDelete.onclick = () => onDeleteTask(jobId);

    btnEdit.onclick = () => replaceWithEditForm(todo, jobId, textElement.innerText);
  });
};

const replaceWithEditForm = (todoElement, jobId, oldText) => {
    const editForm = document.createElement("form");
    editForm.className = "TodoForm";
  
    editForm.innerHTML = `
      <input type="text" class="todo-input" placeholder="Edit task..." value="${oldText}" />
      <button type="submit" class="todo-btn">Update Task</button>
    `;
  
    todoElement.replaceWith(editForm);
  
    const inputEdit = editForm.querySelector(".todo-input");
    inputEdit.focus();
  
    editForm.onsubmit = async (e) => {
        e.preventDefault();
        const newText = inputEdit.value.trim();
        if (!newText) return;
    
        await onUpdateTask(jobId, {
            title: newText,
            completed: false,
    });

    renderTasks();
  
    };
  };
  

form.onsubmit = async (e) => {
  e.preventDefault();
  const inputValue = input.value.trim();
  if (!inputValue) return;

  await postData({ title: inputValue, completed: false });
  input.value = "";
  await renderTasks();
};

renderTasks();
