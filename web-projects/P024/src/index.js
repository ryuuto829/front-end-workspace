/**
 * UI Controller
 */
const UI = (() => {

  const DOM = {
    priority: document.getElementById('priority'),
    dropdown: document.getElementById('dropdown'),
    addBtn: document.getElementById('add-btn'),
    input: document.getElementById('input'),
    list: document.querySelector('.list-group'),
    close: document.querySelector('.close'),
  };

  const showDropdown = () => {
    DOM.dropdown.classList.add('show');
  };

  const _resetPrior = () => {
    DOM.priority.classList.remove('btn-danger', 'btn-warning');
    DOM.addBtn.classList.remove('btn-danger', 'btn-warning');
    DOM.input.classList.remove('border-danger', 'border-warning', 'focus-danger', 'focus-warning');
  };

  const _addPrior = color => {
    DOM.priority.classList.add(`btn-${color}`);
    DOM.addBtn.classList.add(`btn-${color}`);
    DOM.input.classList.add(`border-${color}`, `focus-${color}`);
  };

  const updatePrior = (priority) => {

    if (priority === '1') {
      _resetPrior();
      _addPrior('danger');
    } else if (priority === '2') {
      _resetPrior();
      _addPrior('warning');
    } else {
      _resetPrior();
    }
  };

  const closeDropdown = () => {
    DOM.dropdown.classList.remove('show');
  };

  const clearInputs = () => {
    DOM.input.value = '';
    _resetPrior();
  };

  const renderTask = (text, priority, date, id) => {

    let span = '';
    if (priority === '1') {
      span = `<span class="badge badge-danger ml-2">🔥 Very Hot</span>`;
    } else if (priority === '2') {
      span = `<span class="badge badge-warning ml-2">🔥 Hot</span>`;
    }

    let record = '';
    const timeRange = +(new Date) - +date;
    if (timeRange < (86400000)) {
      record = `${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}`;
    } else {
      record = `${Math.floor(timeRange / 86400000)} days ago`;
    }

    const html = `
    <div class="list-group-item list-group-item-action flex-column align-items-start" data-id="${id}">
      <div class="custom-control custom-checkbox">
        <div class="d-flex w-100 justify-content-between">
          <input type="checkbox" class="custom-control-input" id="check-${id}">
          <label class="custom-control-label" for="check-${id}">${text} ${span}</label>
          <div class="float-left">
            <small>${record}</small>
            <div class="d-inline">
              <button type="button" class="close" aria-label="Close">
                <span aria-hidden="true" class="pl-2 close-btn">&times;</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    DOM.list.insertAdjacentHTML('afterbegin', html);
  };

  const removeTask = id => {
    console.log(id)
    id.parentNode.removeChild(id);
  };

  return {
    showDropdown,
    updatePrior,
    closeDropdown,
    clearInputs,
    renderTask,
    removeTask,
    DOM
  };
})();

/**
 * TASKS
 */
const tasks = (() => {

  const list = [];

  class Task {
    constructor(content, prior, date, id) {
      this.content = content;
      this.prior = prior;
      this.date = date;
      this.id = id;
    }
  }

  const addTask = (text, priority, date, id) => {
    list.push(new Task(text, priority, date, id));
  };

  const deleteTask = id => {
    for (let task of list) {
      if (task.id === id) {
        const index = list.indexOf(task);
        list.splice(index);
      }
    }
  };

  return {
    addTask,
    deleteTask,
    list,
  }
})();

/**
 * MAIN CONTROLLER
 */
const main = (() => {

  // State
  const state = {
    prior: 0,
  };

  const newTask = () => {
    state.currentDate = new Date;
    state.currentID = (+state.currentDate).toString(16);
    tasks.addTask(UI.DOM.input.value, state.prior, state.currentDate, state.currentID);
    UI.renderTask(UI.DOM.input.value, state.prior, state.currentDate, state.currentID);
    UI.clearInputs();
  };

  // 1. Expand dropdown menu
  UI.DOM.priority.addEventListener('click', () => {
    UI.showDropdown();
  });

  // 2. Chose a priority and update UI
  UI.DOM.dropdown.addEventListener('click', e => {
    const prior = e.target.dataset.prior;

    // 1. Change color of the inputs and update state
    if (state.prior !== prior) {
      state.prior = prior;
      UI.updatePrior(prior);
    }

    // 2. CLose Dropdown menu
    UI.closeDropdown();
  });

  // 3. Add task to the list and update state
  ['click', 'keydown'].forEach(element =>
    UI.DOM.addBtn.addEventListener(element, e => {

      if (UI.DOM.input.value) {
        if (e.type === 'keydown') {
          if (e.key === 'Enter') {
            e.preventDefault();
            newTask();
            state.prior = 0;
          }
        }
        if (e.type === 'click') {
          newTask();
          state.prior = 0;
        }
      }
    }));

  // 4. Delete task by hitting close button
  UI.DOM.list.addEventListener('click', e => {

    if (e.target.classList.contains('close-btn')) {
      const currentTask = e.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode;
      tasks.deleteTask(currentTask.dataset.id);
      UI.removeTask(currentTask);
    }

    // 5. Check out task from the list
    if (e.target.closest('.custom-control-label')) {
      const taskID = e.target.closest('.custom-control-label');
      taskID.parentNode.parentNode.parentNode.classList.toggle('bg-light');
      taskID.parentNode.parentNode.parentNode.classList.toggle('text-muted');
    }
  });
})();