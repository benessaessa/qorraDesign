
// var sheet = document.createElement('style'),  
// $rangeInput = $('.range input'),
// prefs = ['webkit-slider-runnable-track', 'moz-range-track', 'ms-track'];

// document.body.appendChild(sheet);

// var getTrackStyle = function (el) {  
// var curVal = el.value,
//     val = (curVal - 1) * 16.666666667,
//     style = '';

// // Set active label
// $('.range-labels li').removeClass('active selected');

// var curLabel = $('.range-labels').find('li:nth-child(' + curVal + ')');

// curLabel.addClass('active selected');
// curLabel.prevAll().addClass('selected');

// Change background gradient
// for (var i = 0; i < prefs.length; i++) {
//   style += '.range {background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #fff ' + val + '%, #fff 100%)}';
//   style += '.range input::-' + prefs[i] + '{background: linear-gradient(to right, #37adbf 0%, #37adbf ' + val + '%, #b2b2b2 ' + val + '%, #b2b2b2 100%)}';
// }

// return style;
// }

// $rangeInput.on('input', function () {
// sheet.textContent = getTrackStyle(this);
// });

// Change input value on label click
$('.range-labels li').on('click', function () {
  $('.range-labels li').removeClass('active selected')
  $(this).addClass('active selected');
var index = $(this).attr('value');

// $rangeInput.val(index + 1).trigger('input');


console.log('++++ ', index)

const { fromEvent } = rxjs;
const { map, startWith } = rxjs.operators;

const house = document.querySelector('#house');
const range = document.querySelector('#range');
range.setAttribute('value',index +1);
// const range = document.querySelector('li.active');
const label = document.querySelector('#label');

const f = new Flipping();
const update = f.wrap(rooms => {
  // const prevRooms = house.getAttribute('data-rooms');
  // house.setAttribute('data-prev-rooms', prevRooms-1);
  house.setAttribute('data-rooms', index);

  // label.setAttribute('data-prev-rooms', prevRooms);
  // label.setAttribute('data-rooms', index+1);
  // label.setAttribute('data-rooms-delta', rooms - prevRooms);
});

const range$ = fromEvent(range, 'input').
pipe(
map(e => e.target.value),
startWith(index));
// console.log('=====', range.getAttribute('value'))
// const range$ = fromEvent(range, 'input').
// pipe(
// map(e => range.getAttribute('value')),
// startWith(6));
// const range$  = fromEvent(range.getAttribute('value').startWith(6))
range$.subscribe(update);

});
