const taskCreateInput = document.querySelector('.create-task__input');
const taskCreateSubmit = document.querySelector('.create-task__button');

taskCreateSubmit.addEventListener('click', () => {
    if (taskCreateInput.value === '') {
        taskCreateInput.placeholder = 'Введите корректные данные';
    } else {
        const newTask = document.createElement('div');
        document.querySelector('.task-list').append(newTask);
        newTask.innerHTML = `
                <div class="task">
                    <div class="task__content">
                        <p class="task__title">${taskCreateInput.value}</p>
                        <button class="task__button"></button>
                    </div>
                </div>`;

    }
});

const taskList = document.querySelector('.task-list');

isChecked = false;

taskList.addEventListener('click',  (e) => {
    if (e.target.classList.contains('task__button')) {
        const btn = e.target;
        const taskTitle = btn.previousElementSibling;
        const taskWrapper = btn.parentElement.parentElement;

        if (!isChecked) {
            btn.classList.add('task__button--done');
            taskTitle.classList.add('task__title--done');
            taskWrapper.classList.add('task--done');
            isChecked = true;

        }
        else {
            btn.classList.remove('task__button--done');
            taskTitle.classList.remove('task__title--done');
            taskWrapper.classList.remove('task--done');
            isChecked = false;
        }
    }
});