const genreList = {

    init: function() {
        console.log('JS loaded');

        genreList.addAllEventListeners();
    },

    
    addBtn: document.querySelector("body > div > div.example-wrapper > a"),
    genreH1: document.querySelector("body > div > div.example-wrapper > h1"),
    addDiv: document.getElementById("genre_add"),
    cancelBtn: document.querySelector("#genre_add > form > div.mt-4 > a"),
    deleteForm: document.getElementsByClassName("delete_btn"),
    
    addAllEventListeners: function() {
        genreList.addBtn.addEventListener('click', genreList.handleClickOnAddGenre);

        genreList.cancelBtn.addEventListener('click', genreList.handleClickOnCancel);

        Array.from(genreList.deleteForm).forEach(element => {
            element.addEventListener('click', (e) => {
                e.preventDefault();

                let result = window.confirm('Êtes vous sur de vouloir supprimer ce genre ?');
                
                result;
            
                if(result === true) {
                    element.submit();
                }
            })
        });
    },

    handleClickOnDelete: function(e) {
        e.preventDefault();

        let result = window.confirm('Êtes vous sur de vouloir supprimer ce genre ?');
        
        result;
    
        if(result === true) {
            self.submit();
        }
    },

    handleClickOnAddGenre: function() {
        genreList.addBtn.style.display = 'none';
        genreList.genreH1.style.display = 'none'
        genreList.addDiv.style.display = 'block';
    },

    handleClickOnCancel: function() {
        genreList.addBtn.style.display = 'inline-block';
        genreList.genreH1.style.display = 'block'
        genreList.addDiv.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', genreList.init);