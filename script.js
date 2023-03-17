// Create a simple todo list that has the following functionalities
let todoList  = document.getElementById('todo_list');
let addItem = document.etElementById('addNewItem');
let buttonElement = document.getElementsByTageName("button");
console.log(buttonElement);

// To add, delete and exit new item
addButton.addEventListener("click", function(item){  
    item.preventDefault();
})

//delete new item
deleteButton.addEventListener("click", function(item){
    item("removeItem")
});

//TO edit new item
exitButton.addEventListener("click", function(item){
    item("exitItem")
});

// prevent empty values from being added to the list
if (newItem.value.trim() === "") {
    return;
}
//Reset when the add button is clicked on 
let buttonOnclick=document.getElementById('newItem').value = "";

//To store todo list using localStorage 
localStorage.setItem("value", "newItem");
    newItem.innerHTML = localStorage.getItem("value");
