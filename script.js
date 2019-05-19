var todos = {
  todolist: [],
  printTodo: function () {
    console.log("My Todo List:");
    if (todos.todolist.length === 0) {
      console.log('your todos list is empty!');
    } else {
    for (var i=0; i<todos.todolist.length;i++) {
      if (todos.todolist[i].completed === false) {
        console.log("( ) "+todos.todolist[i].todoText);
      } else {
        console.log("(X) "+todos.todolist[i].todoText);
      }
      }
    }
  },
  addTodo: function (todoText) {
    todos.todolist.push({
      todoText: todoText,
      completed: false
    });
  },
  changeTodo: function (index, newList) {
    todos.todolist[index].todoText = newList;
  },
  deleteTodo: function(index) {
    todos.todolist.splice(index,1);

  },
  toggleComplete: function(index) {
    var todo = todos.todolist[index];
    todo.completed = !todo.completed;
  },
  toggleAll: function() {
    var countTrue = 0;
    for (i=0; i<todos.todolist.length; i++) {
      if (todos.todolist[i].completed === true) {
        countTrue++;
      }
    }
    if (countTrue === todos.todolist.length) {
      for (i=0; i<todos.todolist.length; i++) {
        todos.todolist[i].completed = false;
      }
    } else {
      for (i=0; i<todos.todolist.length; i++) {
        todos.todolist[i].completed = true;
    }
  
  }
}
  
};


var handlers= {
  toggleAll: function() {
    todos.toggleAll();
    viewScreen.displayTodoScreen();
  },
  addTodo: function() {
    var addTodoTextInput = document.getElementById("addTodoTextInput");
    todos.addTodo(addTodoTextInput.value);
    addTodoTextInput.value = '';
    viewScreen.displayTodoScreen();
  },
  changeTodo: function() {
    var positionInput = document.getElementById("positionInput");
    var changeInput = document.getElementById("changeInput");
    todos.changeTodo(positionInput.valueAsNumber, changeInput.value);
    positionInput.value = '';
    changeInput.value = '';
    viewScreen.displayTodoScreen();
  },
  deleteTodo: function() {
    var deleteInput = document.getElementById("deleteInput");
    todos.deleteTodo(deleteInput.valueAsNumber);
    deleteInput.value = '';
    viewScreen.displayTodoScreen();
  },
  toggleComplete: function() {
    var toggleCompleteInput = document.getElementById("toggleCompleteInput");
    todos.toggleComplete(toggleCompleteInput.valueAsNumber);
    toggleCompleteInput.value = '';
    viewScreen.displayTodoScreen();
  }
};


var viewScreen = {
  displayTodoScreen: function() {
    var ulView = document.querySelector('ul');
    ulView.innerHTML = '';
    for (i=0; i<todos.todolist.length; i++) {
      var liView = document.createElement('li');
      var todo = todos.todolist[i];
      var textDisplay = '';
      if (todo.completed === false) {
        textDisplay = "( ) " + todo.todoText;
      } else {
        textDisplay = "(x) " + todo.todoText;
      }
      liView.textContent = textDisplay
      ulView.appendChild(liView);
    }
    
  }
};





