const input = document.getElementById('taskInput');
const addBtn = document.getElementById('taskBtn');
const output = document.getElementById('output');

const modalBox = document.getElementById('modalBox');
const modalCancel = document.getElementById('modalCancel');
const modalConfirm = document.getElementById('modalConfirm');

const taskValues = JSON.parse(localStorage.getItem('values')) || [];
let deleteIndex = null;

function renderPage() {
    let html = '';
    
    for (const [index, taskValue] of taskValues.entries()) {
        html += `
          <label class="checkbox-container">
            <input type="checkbox" class="task-check" data-index="${index}" ${taskValue.isChecked ? 'checked' : ''}>
            <span class="check-text">${taskValue.text}</span>
            <button class="del-btn" data-index="${index}">Delete</button>
          </label>
        `
    }
    
    input.focus();
    input.value = '';
    output.innerHTML = html;
    localStorage.setItem('values', JSON.stringify(taskValues));
}

renderPage();

addBtn.addEventListener('click', () => {
    taskValues.push({
        text: input.value.trim(),
        isChecked: false
    });
    renderPage();
});

output.addEventListener('change', (e) => {
    if (e.target.classList.contains('task-check')) {
        const index = e.target.dataset.index;
        taskValues[index].isChecked = e.target.checked;
        localStorage.setItem('values', JSON.stringify(taskValues));
    }
});

output.addEventListener('click', (e) => {
    if (e.target.classList.contains('del-btn')) {
        deleteIndex = e.target.dataset.index;
        modalBox.classList.add('show-modal');
    }
});

modalCancel.addEventListener('click', () => {
    modalBox.classList.remove('show-modal');
    deleteIndex = null;
});

modalConfirm.addEventListener('click', () => {
    if (deleteIndex !== null) {
        taskValues.splice(deleteIndex, 1);
        renderPage();
    }
    
    modalBox.classList.remove('show-modal');
    deleteIndex = null;
});