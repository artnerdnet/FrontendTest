const userView = {
    init: function(){
        const $ = document;

        this.searchForm = $.getElementById('search-form');
        this.searchField = $.getElementById('search-keyword');
        
        this.userContainer = $.getElementById('userView');
        this.userAvatarDiv = $.getElementById('userImg');

        this.searchForm.addEventListener('submit',  (e) => {
            e.preventDefault();
            controller.searchByUsername(this.searchField.value);
            this.userContainer.innerHTML = '';
        },
        true
        );
        this.render();
    },        

    render: function(){
        let userAvatar = userData.avatar;
        this.userAvatarDiv.src = userAvatar;

        this.userContainer.innerHTML += `
            <span id='username' class='userSpan'>@${userData.username}</span>
            <h1 id='fullname'>${userData.name}</h1>
            <div id='bioBox' class='scrollBar'>
                <span id='biography' class='userSpan'>${userData.bio}</span>
            </div>
        `;  
    }
}

const repoView = {
    init: function() {
        const $ = document;
        this.reposContainer = $.getElementById('reposView');
        this.render();
    },

    render: function() {
        const repoContainer = `
            ${repoData.map(repoData => `
                <ul class='repoListElement'>
                    <li class="repoTitle"><a href="${repoData.repoURL}">${repoData.repoName}</a></li>
                    <li class="fas fa-star"></li>
                    <li class="repoStarCount">${repoData.repoStars}</li>
                    <li class="fas fa-code-branch"></li>
                    <li class="repoForkCount">${repoData.repoForks}</li>
                </ul>
                `)}
        `
    }
};
