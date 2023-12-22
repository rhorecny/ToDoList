//onClick function

function newItem(){

//checks for input value and creates list item
    let li = $('<li></li>');
    let inputValue = $('#input').val();
    li.append(inputValue);
//alerts if input has no value
    if (inputValue === '') {
        alert("You must write something!");
    } else {
         $('#list').append(li);
    }
//crosses out checklist item on double click
    function crossOut() {
         li.toggleClass("strike");
    }
         li.on("dblclick", function crossOut() {
         li.toggleClass("strike");
    });
//creates a "x" button after each value
    let crossOutButton = $('<crossOutButton></crossOutButton>');
    crossOutButton.append(document.createTextNode('X'));
    li.append(crossOutButton);

   crossOutButton.on("click", deleteListItem);
   function deleteListItem(){
		li.addClass("delete")
 	}
    //makes list drag and drop sortable
     $('#list').sortable();
}