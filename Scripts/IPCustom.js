// if ($response.statusCode != 200) {
//   $done(Null);
// }

// var body = $response.body;
// var obj = JSON.parse(body);

if ($response.statusCode != 200) {
  $done(Null);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

const foods = ['🍎', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍑', '🥭', '🍅', '🥑']
const emojis= ['🐧','🐬','🦉','🍄','⛳️','🚴','🤑','👽','🤖','🎃', '👺', '👁', '🐶', '🐼','🐌', '👥']

var body = $response.body;
var obj = JSON.parse(body);
var title = foods[getRandomInt(foods.length)]+' ' +obj['country'] + ' ' + emojis[getRandomInt(emojis.length)];
var subtitle = obj['city'] + ' ' + obj['isp'];
var ip = obj['query'];
var description = obj['country'] + '\n' + obj['city'] + '\n' + obj['isp'] + '\n' + obj['ipType']+ '\n' + ip;

$done({title, subtitle, ip, description});
