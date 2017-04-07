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

}

//checked item function
function checkMark(checkedItem){
    checkedItem.toggleClass('shopping-item-checked');
}

