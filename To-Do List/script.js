const inputBox = document.querySelector("#input-box");
const listContainer = document.querySelector("#list-container");
const button = document.querySelector("#addTask");

button.addEventListener('click', () => {
  // Input value
  const taskValue = inputBox.value;

  if (taskValue === '') {
    alert('You must write something!');
  } else {
    // Create li element
    let li = document.createElement('li');
    li.innerHTML = taskValue;
    listContainer.appendChild(li);

    // Create X
    let span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
  }

  // cleare input
  inputBox.value = '';

  saveData();
});

listContainer.addEventListener('click', (e) => {
  // click test
  if (e.target.tagName === 'LI') {
    e.target.classList.toggle('checked');
    saveData();
  }
  else if (e.target.tagName === 'SPAN') {
    e.target.parentElement.remove();
    saveData();
  }
});

// Data saving function
function saveData() {
  localStorage.setItem('data', listContainer.innerHTML);
};

function showTask() {
  listContainer.innerHTML = localStorage.getItem('data');
}
showTask();

