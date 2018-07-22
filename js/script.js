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
            Authorization: 'Client-ID 583f4cd67ae6eb74a55f'
        },
        mode: 'cors'
    }).then(response => response.json()).then(function(data) {

        let userFullName = data.name;
        let userLogin = data.login;
        let userBio = data.bio;
        let userAvatar = data.avatar_url;

        let addUserAvatar = () => {
            let imageContainer = document.getElementById('userImg');
            imageContainer.src = userAvatar;
        }

        let addUsernameInfo = () => {
            let usernameSpan = document.createElement('span');
            usernameSpan.id = 'username';
            usernameSpan.innerHTML += `@ ${userLogin}`;
            userContainer.appendChild(usernameSpan);
        }


        let addUserFullNameInfo = () => {
            let userFullNameSpan = document.createElement('h1');
            userFullNameSpan.id = 'fullname';
            userFullNameSpan.innerHTML += userFullName;
            userContainer.appendChild(userFullNameSpan);
        }

        let addUserBio = () => {
            let userBioDiv = document.createElement('div');
            userBioDiv.id = 'bioBox';
            userBioDiv.innerHTML += `<span id='biography'>${userBio}</span>`;
            userContainer.appendChild(userBioDiv);
        }

        addUserAvatar();
        addUsernameInfo();
        addUserFullNameInfo();
        addUserBio();

    });


    fetch(`https://api.github.com/users/${searchedTerm}/repos`, {
        headers: {
            Authorization: 'Client-ID 583f4cd67ae6eb74a55f'
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
                repoForkCountSpan.classList.add('repoForkCount');
            }

            let addStarCount = () => {
                let repoStarCountSpan = document.createElement('span');
                repoStarCountSpan.innerHTML += repoStars;
                createLi.appendChild(repoStarCountSpan);
                repoStarCountSpan.classList.add('repoStarCount');
            }

            let addStarIcon = () => {
                let repoStarIconSpan = document.createElement('span');
                createLi.appendChild(repoStarIconSpan);
                repoStarIconSpan.classList.add('fas', 'fa-star');
            }

            let addForkIcon = () => {
                let repoForkIconSpan = document.createElement('span');
                createLi.appendChild(repoForkIconSpan);
                repoForkIconSpan.classList.add('fas', 'fa-code-branch');
            }

            addRepoTitle();
            addStarIcon();
            addStarCount();
            addForkIcon();
            addForkCount();
        }
    })
});
