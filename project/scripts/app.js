const contentDiv = document.getElementById('content');
const toddlersBtn = document.getElementById('toddlersBtn');
const tasksBtn = document.getElementById('tasksBtn');
const schedulesBtn = document.getElementById('schedulesBtn');
const notificationsBtn = document.getElementById('notificationsBtn');

// Function to fetch toddler profiles
function fetchToddlerProfiles() {
  const url = 'https://run.mocky.io/v3/7d1b86e8-1cd1-4534-a755-49743958addb';

  return fetch(url)
    .then((response) => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json(); // Parse the response as JSON
    })
    .then((data) => {
      return data; // Return the parsed JSON data
    })
    .catch((error) => {
      throw error; // Rethrow the error to handle it in the calling code
    });
}

// Function to display toddler profiles
function displayToddlerProfiles() {
  contentDiv.innerHTML = '<h2>Toddler Profiles</h2>';
  const toddlerList = document.createElement('ul');
  toddlerList.id = 'toddlerList';

  // Fetch toddler profiles and add them to the toddler list
  fetchToddlerProfiles()
    .then((data) => {
      data.forEach((profile) => {
        const toddlerItem = document.createElement('li');
        toddlerItem.textContent = `Name: ${profile.name}, Age: ${profile.age}`;
        toddlerList.appendChild(toddlerItem);
      });
    })
    .catch((error) => {
      console.error('Error fetching toddler profiles:', error);
    });

  contentDiv.appendChild(toddlerList);
}

// Function to display the Task Manager
function displayTaskManager() {
  contentDiv.innerHTML = '<h2>Task Manager</h2';
  const taskList = document.createElement('ul');
  taskList.id = 'taskList';

  const taskInput = document.createElement('input');
  taskInput.type = 'text';
  taskInput.placeholder = 'Enter a new task';
  taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
      addTask(taskInput.value);
      taskInput.value = '';
    }
  });

  contentDiv.appendChild(taskInput);
  contentDiv.appendChild(taskList);

  // Fetch tasks from a data source and add them to the task list
  fetchTasks();
}

// Function to add a new task
function addTask(taskText) {
  const taskList = document.getElementById('taskList');
  const taskItem = document.createElement('li');
  taskItem.innerHTML = `<input type="checkbox">${taskText}`;
  taskList.appendChild(taskItem);
}

// Function to fetch and display tasks (mock data)
function fetchTasks() {
  // Replace this with actual data fetching logic from your data source
  const tasks = ['Buy groceries', 'Walk the dog', 'Prepare dinner'];

  const taskList = document.getElementById('taskList');
  tasks.forEach((taskText) => {
    const taskItem = document.createElement('li');
    taskItem.innerHTML = `<input type="checkbox">${taskText}`;
    taskList.appendChild(taskItem);
  });
}

// Function to display the Schedule Manager
function displayScheduleManager() {
  contentDiv.innerHTML = '<h2>Schedule Manager</h2>';
  const scheduleList = document.createElement('ul');
  scheduleList.id = 'scheduleList';

  const scheduleInput = document.createElement('input');
  scheduleInput.type = 'text';
  scheduleInput.placeholder = 'Add a new schedule';

  const addScheduleBtn = document.createElement('button');
  addScheduleBtn.textContent = 'Add Schedule';
  addScheduleBtn.addEventListener('click', () => {
    const scheduleText = scheduleInput.value.trim();
    if (scheduleText) {
      addSchedule(scheduleText);
      scheduleInput.value = '';
    }
  });

  contentDiv.appendChild(scheduleInput);
  contentDiv.appendChild(addScheduleBtn);
  contentDiv.appendChild(scheduleList);
}

// Function to add a new schedule
function addSchedule(scheduleText) {
  const scheduleList = document.getElementById('scheduleList');
  const scheduleItem = document.createElement('li');
  scheduleItem.textContent = scheduleText;
  scheduleList.appendChild(scheduleItem);
}

// Function to display Notifications
function displayNotifications() {
  contentDiv.innerHTML = '<h2>Notifications</h2>';
  const notificationList = document.createElement('ul');
  notificationList.id = 'notificationList';

  const notificationInput = document.createElement('input');
  notificationInput.type = 'text';
  notificationInput.placeholder = 'Send a notification';

  const sendNotificationBtn = document.createElement('button');
  sendNotificationBtn.textContent = 'Send Notification';
  sendNotificationBtn.addEventListener('click', () => {
    const notificationText = notificationInput.value.trim();
    if (notificationText) {
      sendNotification(notificationText);
      notificationInput.value = '';
    }
  });

  contentDiv.appendChild(notificationInput);
  contentDiv.appendChild(sendNotificationBtn);
  contentDiv.appendChild(notificationList);
}

// Function to send a notification
function sendNotification(notificationText) {
  const notificationList = document.getElementById('notificationList');
  const notificationItem = document.createElement('li');
  notificationItem.textContent = notificationText;
  notificationList.appendChild(notificationItem);
}

// Attach event listeners to the buttons
toddlersBtn.addEventListener('click', displayToddlerProfiles);
tasksBtn.addEventListener('click', displayTaskManager);
schedulesBtn.addEventListener('click', displayScheduleManager);
notificationsBtn.addEventListener('click', displayNotifications);
