const clientKey = 'Client-ID 583f4cd67ae6eb74a55f';
const URL = `https://api.github.com/users/`;
const userModel = {
    

    searchUser: function(userSearched) {
        return fetch(URL+`${userSearched}`, {
            headers: {
                Authorization: clientKey
            },
            mode: 'cors'
        }).then(response => response.json()).then(function(data){
            
            userData = {
                username: data.login,
                name: data.name,
                bio: data.bio,
                avatar: data.avatar_url,
            }

            return userData;
            
        }).catch(function(error) {
            console.log('There was an error with the request:' + error.message);
          });
    },

};

    const repoModel = {
        searchRepos: function(){
            fetch(URL+`${userSearched}+/repos`, {
                headers: {
                    Authorization: clientKey
                },
                mode: 'cors'
            }).then(response => response.json()).then(function(repoData) {
                repoData = {
                    repoName: info.name,
                    repoURL: info.html_url,
                    repoForks: info.forks_count,
                    repoStars: info.stargazers_count,
                }
    
                return repoData;
            }).catch(function(error) {
                console.log('There was an error with the request:' + error.message);
              });
        },
    }