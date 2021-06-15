const comment = {

    init: function() {
        console.log('JS loaded');

        comment.addAllEventListeners();
    },

    userInput: document.querySelector("#comment_form > form > div:nth-child(1)"),
    projectInput: document.querySelector("#comment_form > form > div:nth-child(2)"),
    
    addAllEventListeners: function() {
        userBtn = document.getElementById('comment_user');
        userBtn.addEventListener('click', this.handleClickOnUserBtn);

        projectBtn = document.getElementById('comment_project');
        projectBtn.addEventListener('click', this.handleClickOnProjectBtn);

        commentForm = document.querySelector("#comment_form");
        commentForm.addEventListener('submit', this.handleSearchByProject);
        commentForm.addEventListener('submit', this.handleSearchByUser);
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

    handleSearchByProject: function(e) {
        e.preventDefault();

        var commentProjectLabel = document.querySelector("#form_project").value;
        var commentUserLabel = document.querySelector("#form_user").value;

        fetch('http://localhost:8000/api/v1/projects')
            .then(function (response) {
                return response.json();
            })
            .then(function(data) {
                for(let i = 0; i <= data.length - 1; i++) {

                    console.log(data[i].name);
                    
                    if(String(data[i].name) == commentProjectLabel) {
                        var match = true;
                    }
                }

                if(match == true && commentUserLabel == "") {
                    document.querySelector("#comment_form > form").submit();
                } else if (match !== true && commentUserLabel === "") {
                    window.alert('Le projet n\'existe pas');
                }
            })
    },

    handleSearchByUser: function(e) {
        e.preventDefault();

        var commentUserLabel = document.querySelector("#form_user").value;
        var commentProjectLabel = document.querySelector("#form_project").value;

        fetch('http://localhost:8000/api/v1/users')
            .then(function (response) {
                return response.json();
            })
            .then(function(data) {
                for(let i = 0; i <= data.length - 1; i++) {

                    console.log(data[i].username);
                    
                    if(String(data[i].username) == commentUserLabel) {
                        var match = true;
                    }
                }

                if(match == true && commentProjectLabel == "") {
                    document.querySelector("#comment_form > form").submit();
                } else if (match !== true && commentProjectLabel === "") {
                    window.alert('L\'utilisateur n\'existe pas');
                }
            })
    }

}

document.addEventListener('DOMContentLoaded', comment.init);