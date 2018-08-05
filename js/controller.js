var controller = {

    init: function() {
        userView.init();
    },
    mytest: () => {
        return true;
    },
    searchByUsername: function(searchedkeyword){
        let userSearched = searchedkeyword;
        userModel.searchedTerm = userSearched;
        userModel.searchUser(userSearched).then(function(){
            userData.username;
            userData.bio;
            userData.name;
            userData.avatar;
            userView.render();
        });
    },      
}