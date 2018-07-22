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
            userContainer.innerHTML = `<span id='username'>@${userLogin}</span><h1 id='fullname'>${userFullName}</h1><div id='bioBox' class='scrollBar'><span id='biography'>${userBio}</span></div>`;
        }
        addUserInfo();
    });

    fetch(`https://api.github.com/users/${searchedTerm}/repos`, {
        headers: {
            Authorization: 'Client-ID 462d22cae6dd1d4877bb082c9e9c6502893a9bb7305d4bf8f681d13b56d4abc3'
        },
        mode: 'cors'
    }).then(response => response.json()).then(function(data) {
        let repoListing = document.getElementById('repoList');
        repoListing.innerHTML = '';
        
        for (info of data) {
            let repoName = info.name;
            let repoURL = info.html_url;
            let repoForks = info.forks_count;
            let repoStars = info.stargazers_count;
            
            let createLi = document.createElement('li');
            repoListing.appendChild(createLi);
            createLi.classList.add('repoListElement');        
            
            let addRepoTitle = () => {
                let repoTitleSpan = document.createElement('span');
                repoTitleSpan.innerHTML += repoName.link(repoURL);
                createLi.appendChild(repoTitleSpan);
                repoTitleSpan.classList.add('repoTitle');
            }           
            
            let addForkCount = () => {
                let repoForkCountSpan = document.createElement('span');
                repoForkCountSpan.innerHTML += repoForks;
                createLi.appendChild(repoForkCountSpan);
                repoForkCountSpan.classList.add('repoForkCount', 'fas', 'fa-code-branch');
            }            
            
            let addStarCount = () => {
                let repoStarCountSpan = document.createElement('span');
                repoStarCountSpan.innerHTML += repoStars;
                createLi.appendChild(repoStarCountSpan);
                repoStarCountSpan.classList.add('repoStarCount', 'fas', 'fa-star');
            }
            
            addForkCount();
            addRepoTitle();
            addStarCount();
        }
    })
});
