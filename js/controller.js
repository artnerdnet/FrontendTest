var controller = {

    init: function() {
        userView.init();
    },

    searchByUsername: function(searchedkeyword){
        let userSearched = searchedkeyword;
        userModel.searchedTerm = userSearched;
        userModel.searchUser(userSearched);
    },

    getUserFullName: function() {
        return userModel.userFullName; 
    },

    getUserBio: function() {
        return userModel.userBio; 
    },

    getUserAvatar: function() {
        return userModel.userAvatar; 
    },

        
}