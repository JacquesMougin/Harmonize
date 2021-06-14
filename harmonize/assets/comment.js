const comment = {

    init: function() {
        console.log('JS loaded');

        comment.addAllEventListeners();

        comment.loadProjectFromAPI();
    },

    userInput: document.querySelector("#comment_form > form > div:nth-child(1)"),
    projectInput: document.querySelector("#comment_form > form > div:nth-child(2)"),
    
    addAllEventListeners: function() {
        userBtn = document.getElementById('comment_user');
        userBtn.addEventListener('click', this.handleClickOnUserBtn);

        projectBtn = document.getElementById('comment_project');
        projectBtn.addEventListener('click', this.handleClickOnProjectBtn);
    },
    
    handleClickOnUserBtn: function() {
        comment.userInput.style.display = 'block';

        if(comment.projectInput.style.display == 'block') {
            comment.projectInput.style.display = 'none';
        };
    },

    handleClickOnProjectBtn: function() {
        comment.projectInput.style.display = 'block';

        if(comment.userInput.style.display == 'block') {
            comment.userInput.style.display = 'none';
        };
    },

    loadProjectFromAPI: function() {
        const xhttp = new XMLHttpRequest();
        xhttp.onload = function() {
            console.log(this.responseText);
        }
        xhttp.open("GET", "http://localhost:8000/api/v1/projects");
        xhttp.send();
    },

    /* loadProjectFromAPI: function(){
        const url = 'http://localhost:8000/api/v1/projects';
    
    
        let fetchOptions = 
        {
            method : 'GET',
            mode: 'cors',
        };
        fetch(url, fetchOptions)
          .then(comment.convertFromJson) 
    },
    
    convertFromJson(response){
        console.log(response.json());
        return response.json();
    }, */
}

document.addEventListener('DOMContentLoaded', comment.init);