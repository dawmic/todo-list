const input = document.querySelector('input');
const btn = document.querySelector('button');
const list = document.querySelector('.list');
const clock = document.querySelector('.clock');
const clearBtn = document.querySelector('.clear');
let arr = [];
// events
btn.addEventListener('click', () => {
    event.preventDefault();
    addTask();
    input.value = '';
})
input.addEventListener('keydown', (e) => {

    if (e.keyCode == 13) {
        event.preventDefault();
        addTask();
        input.value = '';
    }

})
clearBtn.addEventListener('click', () => {
    list.innerHTML = '';
    localStorage.clear();
})
list.addEventListener('click', doneAndDelete);

// functions
function addTask() {

    const task = document.createElement('li');
    task.innerHTML = `<span>${input.value}</span>`;
    input.value.length >= 1 ? list.appendChild(task) : false;

    const starBtn = document.createElement('button');

    starBtn.classList.add('taskBtn');
    starBtn.id = 'removeId';
    task.appendChild(starBtn);

    const doneBtn = document.createElement('button');

    doneBtn.classList.add('doneBtn');
    doneBtn.id = 'doneId';
    task.appendChild(doneBtn);
    arr.push(task.innerHTML);
}

function doneAndDelete(e) {
    const element = e.target;
    if (element.id == 'removeId') {
        element.parentElement.className = 'fall';
        element.parentElement.addEventListener('transitionend', function() {
            element.parentElement.remove();
        });
    }
    if (element.id == 'doneId') {
        element.parentElement.classList.toggle('done');
        element.classList.toggle('doneBtnClicked');
    }
}
//////////////////////////////////////DATE
const data = new Date();
const day = data.getDay();
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const hour = data.getHours();
let minute = data.getMinutes();
if (minute < 10) {
    minute = '0' + minute;
}

clock.innerHTML = `${days[day]} ${hour}:${minute}`;


//LOCALSTORAGE

window.addEventListener("beforeunload", () => {
    localStorage.setItem('lista', list.innerHTML);
}, false);


const savedLS = localStorage.getItem('lista');
if (savedLS) {
    list.innerHTML = savedLS;
}