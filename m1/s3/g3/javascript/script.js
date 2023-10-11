const taskInput = document.getElementById('taskList');

const addTaskButton =document.getElementById ('addTask');

const taskList = document.getElementById('list');




    function addTask() {
        const taskText = document.getElementById("taskList").value;
        if (taskText.trim() === "") {
            alert("Inserisci un nome per il task.");
            return;
        }

        const taskList = document.getElementById("list");
        const newTask = document.createElement("li");
        newTask.textContent = taskText;

        // Bottone per segnare il task come completato
        const completeButton = document.createElement("button");
        completeButton.textContent = "Completato";
        completeButton.onclick = function () {
            newTask.style.textDecoration = "line-through";
        };

        // Bottone per eliminare il task
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Elimina";
        deleteButton.onclick = function () {
            taskList.removeChild(newTask);
        };

        // Aggiungere i bottoni al task
        newTask.appendChild(completeButton);
        newTask.appendChild(deleteButton);

        // Aggiungere il task alla lista
        taskList.appendChild(newTask);

        // Reset input
        document.getElementById("taskList").value = "";
    }

    // Bottone "Click To Add"
    document.getElementById("addTask").addEventListener("click", addTask);

    

