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
    // appState.push({listItem.item = item, listItem.isChecked = false});
    // console.log(appState.item + " " + appState.isChecked);
    appState.push(listItem);
    renderHtml(appState);
}

//remove function, permenantly deletes the list
//item
function removeItem(appState, item){

    var index = appState.item.findIndex(function(index){
        return index === item;
    });

    appState.item.splice(index, 1);

    renderHtml(appState);
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
        var inputValue =  $('#shopping-list-entry').val()
        addItem(appState, inputValue);
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
    });
})

//function creates the list element
function listElement(item){
    var element = '<li>' +
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
      $('.shopping-list').append(element);
}

//I think this method would better suited to load data from the server
//on initial start up and then a single item render function would be needed to 
//render a single item to the ui when the user adds one??
//renders html 
function renderHtml(appState){
    //removes the previous rendering, seems hacky
    $('.shopping-list').children().remove();

    appState.forEach(function(item){
        listElement(item.item);
    })
}