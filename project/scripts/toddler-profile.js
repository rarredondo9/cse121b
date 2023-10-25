const toddlerProfiles = [
    { name: 'Toddler 1', age: 2, favoriteToy: 'Teddy Bear' },
    { name: 'Toddler 2', age: 3, favoriteToy: 'Building Blocks' },
];

function displayToddlerProfiles() {
    const profileContainer = document.querySelector('.profile-container');
    profileContainer.innerHTML = ''; 

    toddlerProfiles.forEach((toddler) => {
        const profileDiv = document.createElement('div');
        profileDiv.classList.add('toddler-card');
        profileDiv.innerHTML = `
            <h2>${toddler.name}</h2>
            <p>Age: ${toddler.age} years</p>
            <p>Favorite Toy: ${toddler.favoriteToy}</p>
        `;
        profileContainer.appendChild(profileDiv);
    });
}

document.getElementById('create-profile-button').addEventListener('click', () => {

    window.location.href = 'create-profile.html';
});

displayToddlerProfiles();
