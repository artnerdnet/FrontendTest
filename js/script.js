const searchForm = document.getElementById('search-form');
const searchField = document.getElementById('search-keyword');
let searchedTerm;
const userContainer = document.getElementById('userView');
const username = document.getElementById('usernane');
const reposContainer = document.getElementById('reposView');

searchForm.addEventListener('submit', function(e) {
    userView.innerHTML = '';
    searchedTerm = searchField.value;

    fetch(`https://api.github.com/users/${searchedTerm}`, {
        headers: {
            Authorization: 'Client-ID 462d22cae6dd1d4877bb082c9e9c6502893a9bb7305d4bf8f681d13b56d4abc3'
        },
        mode: 'cors'
    }).then(response => response.json()).then(function(data) {
        let addUserInfo = () => {
            let userFullName = data.name;
            let userLogin = data.login;
            let userBio = data.bio;
            userContainer.innerHTML = `<span id='username' class='userSpan'>@${userLogin}</span><h1 id='fullname'>${userFullName}</h1><span id='biography' class='userSpan'>${userBio}</span>`;
        }
        addUserInfo();
    });
})
