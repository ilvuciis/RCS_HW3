
var i = 1,
f = 'Fizz',
b = 'Buzz',
out = '';

for (; i <= 100; i++) {
out = !(i % 3)? !(i % 5)? f+b : f : !(i % 5)? b : i;
document.write('<span>', out, ', ', '</span>');
}


//container = document.getElementById('container');
//for (var i = 0; i <= 100; i++) {
//  container.innerHTML += '<div class="result">ITEM' + (out) + '</div>';
//}