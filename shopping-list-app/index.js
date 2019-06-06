'use strict';

// Upon pressing enter OR clicking the button, take user input and create list item

// Upon pressing delete, delete list item

// Upon pressing check, strike through the list item

$('#js-shopping-list-form').find('button').click(function(e) {
  e.preventDefault();
  const usrInput = $('#shopping-list-entry').val();

  $('.shopping-list').append(`<li>
    <span class="shopping-item">${usrInput}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
  </li>`);
});

$('.shopping-list').on('click', '.shopping-item-delete', function(e) {
  $(this).parents('li').remove();
});

$('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
  $(this).parents('li').find('.shopping-item').toggleClass('shopping-item__checked');
}); 