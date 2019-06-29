// if ($response.statusCode != 200) {
//   $done(Null);
// }

// var body = $response.body;
// var obj = JSON.parse(body);

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const foods = ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍅']

var title = foods[getRandomInt(foods.length)];
var subtitle = '今天吃什么水果？';
var ip = '1.1.1.1';
var description = 'description'+ip;


$done({title, subtitle, ip, description});
