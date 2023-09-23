/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */

let fullName= 'Rebeca Arredondo';
let currentYear= '2023'
let profilePicture = 'images/me.jpg';


/* Step 3 - Element Variables */

const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
const imageElement = document.querySelector(`img`);


/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = currentYear;
imageElement.setAttribute('src', `${profilePicture}`);
imageElement.setAttribute('alt', `Profile image of ${fullName}`);


/* Step 5 - Array */
let favoriteFoods = ['Sushi', 'Panacotta', 'Salmon', 'Watermelon', 'Cheesecake', 'Candy'];
let newFavoriteFood = 'Ice Cream';

foodElement.innerHTML = favoriteFoods.join('<br>');
favoriteFoods.push(newFavoriteFood);
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
favoriteFoods.shift();
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
favoriteFoods.pop();
foodElement.innerHTML += `<br>${favoriteFoods.join('<br>')}`;
