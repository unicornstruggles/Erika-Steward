//welcome message
var user = 'Erika';
var salutation = 'welcome,';
var greeting = salutation + user + '!Please view and comment for reviews.';
var greetingEl = document.getElementById('greeting');

greetingEl.textContent = greeting;

//product price
var price = 89.99;
studentDiscount = .15;
studentPrice = price - (price * studentDiscount),
priceEl = document.getElementById('price'),
studentPriceEl =document.getElementById('student-price');

priceEl.textContent = price.toFixed(2);
studentPriceEl.textContent = studentPrice.toFixed(2);
