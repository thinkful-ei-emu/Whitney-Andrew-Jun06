/* eslint-disable no-console */
'use strict';

$('.thumbnail').on('click', e => {
  // console.log(e.target);
  $('.hero img').attr('src', $(e.target).attr('src'));
  $('.hero img').attr('alt', $(e.target).attr('alt'));
  // console.log($('.hero img').attr('src'), $('.hero img').attr('alt'));
});

$('.thumbnail').keydown(function(e) {
  console.log('keypress');
  // e.preventDefault();
  if (e.which === 13) {
    // console.log($(this));
    // console.log($(event.target).find('img').attr('src'));
    // console.log($(this).find('img'));
    $(this).find('img').click();
  }
  else return;
});