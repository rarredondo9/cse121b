const TODDLER_DATA_URL = 'http://localhost:3000/toddlers';
const SCHEDULE_DATA_URL = 'http://localhost:3000/schedules';

let toddlerData = [];
let scheduleData = [];
let tasks = [];

async function fetchToddlerData() {
    try {
        const response = await fetch(TODDLER_DATA_URL);
        toddlerData = await response.json();
    } catch (error) {
        console.error('Error fetching toddler data', error);
    }
}

async function fetchScheduleData() {
    try {
        const response = await fetch(SCHEDULE_DATA_URL);
        scheduleData = await response.json();
    } catch (error) {
        console.error('Error fetching schedule data', error);
    }
}

document.getElementById('schedules-button').addEventListener('click', () => {
    window.location.href = 'schedules.html';
});

function displayToddlerData(data) {
  const toddlerDataElement = document.querySelector('.toddler-data');
  toddlerDataElement.innerHTML = ''; 

  data.forEach((toddler) => {
    const toddlerDiv = document.createElement('div');
    toddlerDiv.classList.add('toddler-card');
    toddlerDiv.innerHTML = `
      <h2>${toddler.name}</h2>
      <p>Age: ${toddler.age} years</p>
      <p>Favorite Toy: ${toddler.favoriteToy}</p>
    `;
    toddlerDataElement.appendChild(toddlerDiv);
  });
}

function displayScheduleData(data) {
  const scheduleDataElement = document.querySelector('.schedule-data');
  scheduleDataElement.innerHTML = ''; 

  data.forEach((schedule) => {
    const scheduleDiv = document.createElement('div');
    scheduleDiv.classList.add('schedule-item');
    scheduleDiv.innerHTML = `
      <h2>${schedule.title}</h2>
      <p>Date: ${schedule.date}</p>
      <p>Time: ${schedule.time}</p>
      <p>Location: ${schedule.location}</p>
    `;
    scheduleDataElement.appendChild(scheduleDiv);
  });
}


function addTask(description) {
    const newTask = { description, completed: false };
    tasks.push(newTask);
    displayTasks();
}

function completeTask(taskIndex) {
    tasks[taskIndex].completed = true;
    displayTasks();
}

function scheduleNotifications() {
    tasks.forEach((task, index) => {
        setTimeout(() => displayNotification(task.description), 5000 * (index + 1));
    });
}

function displayNotification(message) {
    const notificationArea = document.querySelector('.notification-system');
    const notificationMessage = document.createElement('div');
    notificationMessage.classList.add('notification-message');
    notificationMessage.innerText = `Reminder: ${message}`;
    notificationArea.appendChild(notificationMessage);
}

document.addEventListener('DOMContentLoaded', () => {

    document.getElementById('toddler-profile-button').addEventListener('click', () => {
        fetchToddlerData();
    });

    document.getElementById('schedules-button').addEventListener('click', () => {
        fetchScheduleData();
    });

    document.getElementById('add-task-button').addEventListener('click', () => {
        const taskDescription = prompt('Enter a new task:');
        if (taskDescription) {
            addTask(taskDescription);
        }
    });

    document.getElementById('complete-task-button').addEventListener('click', () => {
        const taskIndex = parseInt(prompt('Enter the index of the task to complete:'));
        if (!isNaN(taskIndex) && taskIndex >= 0 && taskIndex < tasks.length) {
            completeTask(taskIndex);
        } else {
            alert('Invalid task index.');
        }
    });

    document.getElementById('toddler-profile-button').addEventListener('click', () => {
        window.location.href = 'toddler-profile.html';
    });

    document.getElementById('schedules-button').addEventListener('click', () => {
        window.location.href = 'schedules.html';
    });

});
