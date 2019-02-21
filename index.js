/*
--Using this and event delegation
--enter items they need to purchase by entering text and hitting      "Return" or clicking the "Add item" button
--check and uncheck items on the list by clicking the "Check" button
--permanently remove items from the list
--Hint: you may find it helpful to read up on and use the following jQuery methods: .submit(), preventDefault(), toggleClass(), and closest().
*/

(function($) {

// Target input field
// On click:
// --empty input field
// --remove default
// --create new box
// --with new name

  $("form").submit(function() {
    event.preventDefault();
    // Add new item before first item of shopping list
    // let shoppingItem = "<li><span class='shopping-item'>" + $('#shopping-list-entry').val() + "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>";

    let inputVal = $('#shopping-list-entry').val();
    let shoppingItem = `<li><span class='shopping-item'>${inputVal}</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>`;

    // let shoppingItem1 = "<li><span class='shopping-item'>";
  
    // let shoppingItem2 = $('input');

    // let shoppingItem3 = "</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>";

    // let shoppingItem4 = `$(shoppingItem1)$(shoppingItem2)$(shoppingItem3)`;
    $(".shopping-list").prepend(shoppingItem);
    // $(".shopping-list").prepend(`<li><span class='shopping-item'>${inputVal}</span><div class='shopping-item-controls'><button class='shopping-item-toggle'><span class='button-label'>check</span></button><button class='shopping-item-delete'><span class='button-label'>delete</span></button></div></li>`);
    //$("#shopping-list-form").find("input:text").val("");
    $('#js-shopping-list-form').trigger("reset");
  });

// Target check box
// On click:
// --toggle checked class

  // let thisThing = $('button').closest('span');

  // $('.shopping-item-toggle').on('click', function(event) {
  $('.shopping-list').on('click', '.shopping-item-toggle', function(event) {
    // console.log(thisThing);
    // $(thisThing).toggleClass('.shopping-item_checked');

    //$('span').toggleClass('shopping-item_checked');

    // $(this).closest('span').toggleClass('shopping-item_checked');
    // let toggleSpan = $(this).closest('span');
    // $(toggleSpan).toggleClass('shopping-item_checked');

    // $(this).closest('li').toggleClass('shopping-item_checked');
    // $(this).closest('li.shopping-item').toggleClass('shopping-item_checked');
    // $(this).closest('li', '.shopping-item').toggleClass('shopping-item_checked');
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });

// Target delete box
// On click:
// --delete box

  // $('button').on('click', '.shopping-item-delete', function(event) {
  $('.shopping-list').on('click', '.shopping-item-delete', function(event) {
  // $('.shopping-item-delete').on('click', function(event) {
    $(this).closest('li').remove();
  });

}(jQuery));