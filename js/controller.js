var controller = {

    init: function() {
        userView.init();
        repoView.init(); debugger
    },

    searchByUsername: function(searchedkeyword){
        let userSearched = searchedkeyword;
        userModel.searchUser(userSearched).then(function(){ debugger
            userView.render();
            repoView.render(); debugger
        });
    }
}