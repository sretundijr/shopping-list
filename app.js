// alert('linked');

//create application state object
//stores list items in an array
var appState = {
    item: []
}

//create setter for app state
function addItem(appState, item){
    appState.item.push(item);
}

//remove function, permenantly deletes the list
//item
function removeItem(appState, item){
    for(var i = 0; i < appState.item.length; i++){
        //checks if item exists before removal
        if(appState.item[i].toLowerCase() === item.toLowerCase()){
            appState.item.splice(i, 1);
        }
    }
}

//checked item function
function checkMark(checkedItem){
    checkedItem.toggleClass('shopping-item__checked');
}

//page load and listeners
//should i pass app state here as an arg for page load function
$(function(){
    //form listener
    //calls add item function, calls app state globally?
    $('#js-shopping-list-form').submit(function(e){
        // prevent default form behavior
        e.preventDefault();
        addItem(appState, $('#shopping-list-entry').val());
    });

    //toggle checked listener
    $('.shopping-list')
        .on('click', '.shopping-item-toggle', function(e){
            checkMark($(this)
                .parent()
                .prev());
    });
    
    //delete button listener, removes the li element and makes a 
    //call to remove item function
    $('.shopping-list')
        .on('click', '.shopping-item-delete', function(e){
            removeItem(appState, $(this).parent().prev().text());
            $(this).closest('li').remove();
    });
})