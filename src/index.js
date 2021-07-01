document.addEventListener("DOMContentLoaded", () => {
  // your code here
});
// listen for click event to grab the value submitted in 
// form field and append it to a list 
let formValue = document.getElementById("new-task-description"); 
let tasks = document.getElementById("tasks"); 
document.addEventListener("submit", (e) => {
  e.preventDefault(); 
  console.log(formValue.value)
  let task = formValue.value 
  appendTask(task); 
  formValue.value = ""; 

})

function appendTask(task) {
  let li = document.createElement("li");
  li.innerHTML = task;
  tasks.append(li); 
}