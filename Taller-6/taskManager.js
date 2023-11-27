// Módulo para manejar la lista de tareas
const TaskManager = (() => {
    // Obtener las tareas almacenadas en Local Storage
    const getTasks = () => {
        const tasks = JSON.parse(localStorage.getItem('tasks')) || [];
        return tasks;
    };

    // Guardar las tareas en Local Storage
    const saveTasks = (tasks) => {
        localStorage.setItem('tasks', JSON.stringify(tasks));
    };

    // Renderizar la lista de tareas en el HTML
    const renderTasks = () => {
        renderList('pendingTaskList', 'Pendientes', false);
        renderList('completedTaskList', 'Completadas', true);
    };

    // Renderizar una lista específica (pendientes o completadas)
    const renderList = (listId, headerText, completed) => {
        const taskListElement = document.getElementById(listId);
        taskListElement.innerHTML = '';

        const tasks = getTasks();
        tasks.forEach((task, index) => {
            if (task.completed === completed) {
                const li = document.createElement('li');
                li.textContent = task.text;

                // Agregar botón para marcar/completar tarea
                const toggleButton = document.createElement('button');
                toggleButton.textContent = completed ? 'Desmarcar' : 'Completar';
                toggleButton.addEventListener('click', () => {
                    toggleTask(index);
                });

                // Agregar botón para eliminar tarea
                const deleteButton = document.createElement('button');
                deleteButton.textContent = 'Eliminar';
                deleteButton.addEventListener('click', () => {
                    deleteTask(index);
                });

                li.appendChild(toggleButton);
                li.appendChild(deleteButton);

                taskListElement.appendChild(li);
            }
        });
    };

    // Toggle (marcar/desmarcar) una tarea como completada
    const toggleTask = (index) => {
        const tasks = getTasks();
        tasks[index].completed = !tasks[index].completed;
        saveTasks(tasks);
        renderTasks();
    };

    // Eliminar una tarea
    const deleteTask = (index) => {
        const tasks = getTasks();
        tasks.splice(index, 1);
        saveTasks(tasks);
        renderTasks();
    };

    // Agregar una nueva tarea
    const addTask = (text) => {
        const tasks = getTasks();
        tasks.push({ text, completed: false });
        saveTasks(tasks);
        renderTasks();
    };

    return {
        init: () => {
            renderTasks();

            const addTaskBtn = document.getElementById('addTaskBtn');
            addTaskBtn.addEventListener('click', () => {
                const taskInput = document.getElementById('taskInput');
                const newTask = taskInput.value.trim();
                if (newTask !== '') {
                    addTask(newTask);
                    taskInput.value = '';
                }
            });
        },
    };
})();

// Inicializar el módulo al cargar la página
TaskManager.init();
