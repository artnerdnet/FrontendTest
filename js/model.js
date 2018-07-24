const userModel = {


    searchUser: function(userSearched) {
        searchedTerm = controller.userSearched;
        return fetch(`https://api.github.com/users/${this.searchedTerm}`, {
            headers: {
                Authorization: 'Client-ID 583f4cd67ae6eb74a55f'
            },
            mode: 'cors'
        }).then(response => response.json()).then(function(data){
            

            this.userLogin = data.login;
            this.userFullName = data.name;
            this.userBio = data.bio;
            this.userAvatar = data.avatar_url;

            
        }).catch(function(error) {
            console.log('There was an error with the request:' + error.message);
          });
    },
    searchRepos: function(){
        fetch(`https://api.github.com/users/${searchedTerm}/repos`, {
            headers: {
                Authorization: 'Client-ID 583f4cd67ae6eb74a55f'
            },
            mode: 'cors'
        }).then(response => response.json()).then(function(repoData) {
            for (info of repoData) {
                let repoName = info.name;
                let repoURL = info.html_url;
                let repoForks = info.forks_count;
                let repoStars = info.stargazers_count;
            }
        })
    }



















}