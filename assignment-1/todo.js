
const addtodo = document.querySelector(".inputField input");
const addBtn = document.querySelector(".inputField button");
const todoList = document.querySelector(".todoList");
const deleteAllBtn = document.querySelector(".footer button");

addtodo.onkeyup = ()=>{
  let userEnteredValue = addtodo.value; 
  if(userEnteredValue.trim() != 0){ 
    addBtn.classList.add("active"); 
  }else{
    addBtn.classList.remove("active"); 
  }
}

showTasks(); 
