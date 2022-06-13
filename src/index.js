document.addEventListener("DOMContentLoaded", () => {
  // your code here
  let form = document.querySelector("#create-task-form");
  form.addEventListener('submit', function (e){
    e.preventDefault()
    todoHandler(e.target.newTaskDescription.value)
      todoHandler(e.target.day.value);
    
  })
  
  function todoHandler(newTodo) {
    let p = document.createElement("p");
    let delet = document.createElement('button');
   delet.textContent =  'x'
    delet.addEventListener('click', deleteHandler)
    p.textContent = `${newTodo} `;
    p.appendChild(delet);
    document.querySelector("#tasks").appendChild(p);
  }
  function deleteHandler(e) {
    e.target.parentNode.remove()
  }
  // p.push(date);
  // let date = { checked: false, id: Date.now() };
});
 
