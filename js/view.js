const userView = {
    init: function(){

        this.searchForm = document.getElementById('search-form');
        this.searchField = document.getElementById('search-keyword');
        this.userContainer = document.getElementById('userView');
        this.userAvatarDiv = document.getElementById('userImg');
        this.usernameDiv = document.getElementById('username');
        this.fullNameDiv = document.getElementById('fullname');
        this.bioDiv = document.getElementById('bioBox');
        this.reposContainer = document.getElementById('reposView');

        this.searchForm.addEventListener('submit',  (e) => {
                e.preventDefault();
                controller.searchByUsername(this.searchField.value);
            },
            true
        );
        this.render();
    },

    render: function(){

        this.usernameDiv.innerHTML = '';
        this.usernameDiv.innerHTML += `@${userData.username}`;

        this.fullNameDiv.innerHTML = '';
        this.fullNameDiv.innerHTML += `${userData.name}`;
        
        let userAvatar = userData.avatar;
        this.userAvatarDiv.src = userAvatar;

        this.bioDiv.innerHTML = '';
        this.bioDiv.innerHTML += `${userData.bio}`;



       
    }
}