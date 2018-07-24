const userView = {
    init: function(){

        this.searchForm = document.getElementById('search-form');
        this.searchField = document.getElementById('search-keyword');
        this.userContainer = document.getElementById('userView');
        this.username = document.getElementById('username');
        this.fullName = document.getElementById('fullName');
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
        let getUserInfo = controller.userInfoLogin;
        this.username.HTML = '';
        this.username.innerHTML += `@${getUserInfo}`;
    }
}