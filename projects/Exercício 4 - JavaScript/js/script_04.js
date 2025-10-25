const list = document.getElementById('pendentList');
const inputTask = document.getElementById('inputTask');
let count = 0;

function addTask() {
    const newElement = document.createElement('div');
    count+=1
    newElement.innerHTML = `<span id="span_${count}">${inputTask.value}</span>
                                  <button onclick = "removeTask('span_${count}')">
                                    OK
                                  </button>`;
  pendentList.appendChild(newElement); 
}
function removeTask(Element) {
   document.getElementById(Element).style.textDecoration = 'line-through';
}

