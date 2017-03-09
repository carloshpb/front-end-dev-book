(function (window) {
  'use strict';
  var FORM_SELECTOR = '[data-coffee-order="form"]';
  var App = window.App;
  var Truck = App.Truck;
  var DataStore = App.DataStore;
  var FormHandler = App.FormHandler;
  var myTruck = new Truck('ncc-1701', new DataStore());
  window.myTruck = myTruck;
  var formHandler = new FormHandler(FORM_SELECTOR);

  formHandler.addSubmitHandler(myTruck.createOrder.bind(myTruck));
  console.log(formHandler);
})(window);

function updateStrengthRating(strength) {
	document.querySelector('#strength-rating').value = strength;
  updateStrengthRatingColor(strength);
}

function updateStrengthRatingColor(strength) {
  box = document.getElementById('strength-rating');
  /* box's css attribute of background will have the color updated by multiplying
  4.88 (244 rgb value * 2, since I want to completely traverse two colors, / 100, the size of
  my range) by the strength*/
  if (strength <= 50) {
    rgbValue = Math.round(strength * 4.88);
    box.style.background = "rgb(" + rgbValue + ",244,0)";
  } else {
    /* subtract total from 244 since we are couting up now instead of down
    to see this in action, slide the range slider while observing the <output> element
    and it's 'background' style changes in chrome devtools*/
    rgbValue = 244 - Math.round((strength - 50) * 4.88);
    box.style.background = "rgb(244," + rgbValue + ",0)";
  }
  console.log(rgbValue);
}
