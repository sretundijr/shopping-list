// alert('linked');

//create application state object
//stores list items in an array
var appState = {
    item: [
        //'apples'
    ]
}

//create setter for app state
function addItem(appState, item){
    appState.item.push(item);
}

//remove function, permenantly deletes the list
//item
function removeItem(appState, item){
    for(var i = 0; i < appState.item.length; i++){
        // console.log("is it work" + appState.item[i]);
        
        if(appState.item[i].toLowerCase() === item.toLowerCase()){
            // console.log("is it work2" + item.toLowerCase());    
            appState.item.splice(i, 1);
        }
    }
}

//checked item function
function checkMark(checkedItem){
    checkedItem.toggleClass('shopping-item__checked');
}

//page load and listeners
$(function(){
    //form listener
    $('#js-shopping-list-form').submit(function(e){
        // alert("Im here");
        e.preventDefault();
        addItem(appState, $('#shopping-list-entry').val());
        // console.log(appState.item);
    });

    //toggle checked listener
    $('.shopping-list')
        .on('click', '.shopping-item-toggle', function(e){
            //use closests here to move upward to parent span?
            // console.log($(this).parent().prev());
            checkMark($(this)
                .parent()
                .prev());
    });
    
    //delete button listener, removes the li element and makes a 
    //call to remove item function
    $('.shopping-list')
        .on('click', '.shopping-item-delete', function(e){
            // console.log(appState.item[0])
            // console.log($(this).parent().prev().text());
            removeItem(appState, $(this).parent().prev().text());
            $(this).closest('li').remove();
            // console.log("still here?" + appState.item);
    });
})