/*  File name: app.js
	  Author's name: Mohammad Etedali - 301056465
	  Website address: https://comp299.herokuapp.com
      Date: 5/30/21
	  Description: This file for custome js  */


(function(){
    function start(){
        console.log('App started...')

        let deleteButtons = document.querySelectorAll('.btn-danger');

        for(button of deleteButtons){
            button.addEventListener('click',(event) => {
                if(!confirm('Are you sure?')){
                    event.preventDefault();
                    window.location.assign('/book-list');
                }
            })
        }
    }

    window.addEventListener('load',start);
})();