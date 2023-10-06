/* LESSON 3 - Programming Tasks */

/* Profile Object  */
let myProfile = {
    name:"Rebeca Arredondo",
    photo:"images/me.jpg",
    favoriteFoods: [
        'Sushi',
        'Panacotta',
        'Salmon',
        'Watermelon',
        'Cheesecake', 
        'Candy'
      ],
    hobbies: [
        'Baking',
        'Cooking',
        'Doing Crafts',
        'Painting'
      ],
    placesLived: []
  };
  
/* Populate Profile Object with placesLive objects */

myProfile.placesLived.push(
    {
      place: 'Nicaragua',
      length: '3 years'
    },
    {
        place: 'Utah, United States',
        length: '8 months'
    },
    {
        place: 'Portugal',
        length: '1.5 years'
    }
  );

/* DOM Manipulation - Output */
  
/* Name */
document.querySelector('#name').textContent = myProfile.name;


/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach(food => {
    let li = document.createElement('li');
    li.textContent = food;
    document.querySelector('#favorite-foods').appendChild(li);
  });


/* Hobbies List */
myProfile.hobbies.forEach(hobby => {
    let li = document.createElement('li');
    li.textContent = hobby;
    document.querySelector('#hobbies').appendChild(li);
  });  


/* Places Lived DataList */
myProfile.placesLived.forEach(place => {
    let dt = document.createElement('dt');
    let dd = document.createElement('dd');
    
    dt.textContent = place.place;
    dd.textContent = place.length;
    
    let dl = document.querySelector('#places-lived');
    dl.appendChild(dt);
    dl.appendChild(dd);
  });



