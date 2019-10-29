//Create a function that will add the item entered into the input field to the To Buy list

function addNewItem() {
  //Create a variable that holds the text value of the input field with an ID of 'newItemField'
  let newItem = document.getElementById('newItemField').value;
  //Create a variable that holds the DOM object which represents our <ul> with an ID of 'toBuy'
  let toBuyList = document.getElementById('toBuy')
  //Perform some validation to ensure that the text within the input field is valid (not blank)
  if(newItem != '') {
    // Create a new list item within the To Buy list
    let newListItem = document.createElement('li');

    //Set the text of the new list item to the text of 'newItem'
    newListItem.innerText = newItem;

    //Add the newly created list item, with the proper value, to the To Buy <ul>
    toBuyList.appendChild(newListItem);
    console.log(newListItem)

    //Clear the input field
    document.getElementById('newItemField').value = '';
  }

}

//Lets add some functionality to our Add Item button

//Target the button with an id of "add"
let addItemBtn = document.getElementById('add');

//Attach an event Listener to 'addItemBtn', which listens for a click event. When the event occurs, execute AddNewItem function
addItemBtn.addEventListener('click', addNewItem);

document.getElementById('toBuy').addEventListener('click', function(e) {
  let eventTarget = e.target;

  if(eventTarget.tagName === 'LI') {
    //Target the purchased list <ul>
    let purchasedList = document.getElementById('bought');

    //Add the event target (which is a list item) to the Purchased list
    purchasedList.appendChild(eventTarget);
  }
});

document.getElementById('bought').addEventListener('click', function(e){
    let target = e.target;
    if (target.tagName === 'LI') {
      let toBuyList = document.getElementById('toBuy');
      toBuyList.appendChild(target);
    }
});

//Any item in the Purchased list that is clicked will be moved back to the To Buy list














