const input = document.getElementById('taskInput');
const addBtn = document.getElementById('taskBtn');
const output = document.getElementById('output');

const modalBox = document.getElementById('modalBox');
const modalCancel = document.getElementById('modalCancel');
const modalConfirm = document.getElementById('modalConfirm');

const taskValues = JSON.parse(localStorage.getItem('values')) || [];
let deleteIndex = null;
let timeId;

function renderPage() {
    let html = '';
    
    if (taskValues.length === 0) {
        html = '<p class="no-task-message">No tasks yet</p>';
        output.innerHTML = html;
        localStorage.setItem('values', JSON.stringify(taskValues));
        return;
    }
    
    for (const [index, taskValue] of taskValues.entries()) {
        html += `
          <label class="checkbox-container">
            <input type="checkbox" class="task-check" data-index="${index}" ${taskValue.isChecked ? 'checked' : ''}>
            <div class="check-container">
              <span class="check-text">
                ${taskValue.text}
                <span class="check-line" data-index="${index}"></span>
              </span>
            </div>
            <button class="del-btn" data-index="${index}">Delete</button>
          </label>
        `
    }
    
    input.focus();
    input.value = '';
    output.innerHTML = html;
    
    for (const [index, taskValue] of taskValues.entries()) {
        const line = document.querySelector(`.check-line[data-index="${index}"]`);
        line.style.transform = taskValue.isChecked ? 'scaleX(1)' : 'scaleX(0)';
    }
    
    localStorage.setItem('values', JSON.stringify(taskValues));
}

renderPage();

function showCheck(elem) {
    elem.style.transformOrigin = 'left';
    gsap.to(elem, {
        scaleX: 1
    })
}

function hideCheck(elem) {
    elem.style.transformOrigin = 'right';
    gsap.to(elem, {
        scaleX: 0,
    })
}

addBtn.addEventListener('click', () => {
    clearTimeout(timeId);
    
    if (input.value.trim() === '') {
        input.classList.add('empty');
        
        timeId = setTimeout(() => {
            input.classList.remove('empty');
        }, 200);
        return;
    }
    
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
        
        const line = document.querySelector(`.check-line[data-index="${index}"]`);
        
        if (e.target.checked) {
            showCheck(line);
        } else {
            hideCheck(line);
        }
        
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