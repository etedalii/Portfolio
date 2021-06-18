/*  File name: app.js
	  Author's name: Mohammad Etedali - 301056465
	  Website address: https://comp299.herokuapp.com
      Date: 5/17/21
	  Description: This file for custome js  */


(function(){
    function start(){
        console.log('App started...')
        //Find all button that has danger class 
        let deleteButtons = document.querySelectorAll('.btn-danger');
        //in this for add event for the delete button 
        for(button of deleteButtons){
            button.addEventListener('click',(event) => {
                if(!confirm('Are you sure?')){
                    event.preventDefault();
                    window.location.assign('/contact-list');
                }
            })
        }
    }

    window.addEventListener('load',start);
})();