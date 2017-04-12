// alert('linked');

//create application state object
//stores list items in an array
var appState = [];

//create setter for app state
function addItem(appState, item){
    var listItem = {
        item: item,
        isChecked: false
    };
    return appState.concat([listItem]);
}

//remove function, permenantly deletes the list
//item
function removeItem(appState, item){

    var index = appState.findIndex(function(index){
        return index.item === item;
    });

    appState.splice(index, 1);

    renderHtml(appState);
}

//checked item function
function checkMark(appState, checkedItem){
    if(appState.isChecked){
        appState.isChecked = false;
    } else {
        appState.isChecked = true;
    }
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
        var inputValue =  $('#shopping-list-entry').val()
        appState = addItem(appState, inputValue);
        renderHtml(appState);
        
    });

    //toggle checked listener
    $('.shopping-list')
        .on('click', '.shopping-item-toggle', function(e){
            checkMark(appState, $(this)
                .parent()
                .prev());
    });
    
    //delete button listener, removes the li element and makes a 
    //call to remove item function
    $('.shopping-list')
        .on('click', '.shopping-item-delete', function(e){
            removeItem(appState, $(this).parent().prev().text());
    });
})

//function creates the list element
function listElement(item){
    return '<li>' +
        '<span class="shopping-item">'+ item +'</span>' +
        '<div class="shopping-item-controls">' +
          '<button class="shopping-item-toggle">' +
            '<span class="button-label">check</span>' +
          '</button>' +
          '<button class="shopping-item-delete">' +
            '<span class="button-label">delete</span>' +
          '</button>' +
        '</div>' +
      '</li>';
}

function renderHtml(appState){
    var arr = appState.map(function(item){
        
        return listElement(item.item);
    })

    $('.shopping-list').html(arr.join(''));
}