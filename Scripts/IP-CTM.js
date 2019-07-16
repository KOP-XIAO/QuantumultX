
function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

function ValidCheck(para) {
  if(para) {
  return para
  } else
  {
  return ' '
  }
}

var flags =new Map([[ "Ascension Island" , "🇦🇨" ] , [ "Afghanistan" , "🇦🇫" ] , [ "Anguilla" , "🇦🇮" ] , [ "Albania" , "🇦🇱" ] , [ "Armenia" , "🇦🇲" ] , [ "Antarctica" , "🇦🇶" ] , [ "Argentina" , "🇦🇷" ] , [ "American Samoa" , "🇦🇸" ] , [ "Austria" , "🇦🇹" ] , [ "Australia" , "🇦🇺" ] , [ "Aruba" , "🇦🇼" ] , [ "Åland Islands" , "🇦🇽" ] , [ "Azerbaijan" , "🇦🇿" ] , [ "Barbados" , "🇧🇧" ] , [ "Bangladesh" , "🇧🇩" ] , [ "Belgium" , "🇧🇪" ] , [ "Burkina Faso" , "🇧🇫" ] , [ "Bulgaria" , "🇧🇬" ] , [ "Bahrain" , "🇧🇭" ] , [ "Burundi" , "🇧🇮" ] , [ "Benin" , "🇧🇯" ] , [ "Bermuda" , "🇧🇲" ] , [ "Brunei" , "🇧🇳" ] , [ "Bolivia" , "🇧🇴" ] , [ "Brazil" , "🇧🇷" ] , [ "Bahamas" , "🇧🇸" ] , [ "Bhutan" , "🇧🇹" ] , [ "Bouvet Island" , "🇧🇻" ] , [ "Botswana" , "🇧🇼" ] , [ "Belarus" , "🇧🇾" ] , [ "Belize" , "🇧🇿" ] , [ "Canada" , "🇨🇦" ] , [ "Central African Republic" , "🇨🇫" ] , [ "Switzerland" , "🇨🇭" ] , [ "Cook Islands" , "🇨🇰" ] , [ "Chile" , "🇨🇱" ] , [ "Cameroon" , "🇨🇲" ] , [ "China" , "🇨🇳" ] , [ "Colombia" , "🇨🇴" ] , [ "Clipperton Island" , "🇨🇵" ] , [ "Costa Rica" , "🇨🇷" ] , [ "Cuba" , "🇨🇺" ] , [ "Cape Verde" , "🇨🇻" ] , [ "Curaçao" , "🇨🇼" ] , [ "Christmas Island" , "🇨🇽" ] , [ "Cyprus" , "🇨🇾" ] , [ "Czechia" , "🇨🇿" ] , [ "Germany" , "🇩🇪" ] , [ "Diego Garcia" , "🇩🇬" ] , [ "Djibouti" , "🇩🇯" ] , [ "Denmark" , "🇩🇰" ] , [ "Dominica" , "🇩🇲" ] , [ "Dominican Republic" , "🇩🇴" ] , [ "Algeria" , "🇩🇿" ] , [ "Ceuta & Melilla" , "🇪🇦" ] , [ "Ecuador" , "🇪🇨" ] , [ "Estonia" , "🇪🇪" ] , [ "Egypt" , "🇪🇬" ] , [ "Western Sahara" , "🇪🇭" ] , [ "Eritrea" , "🇪🇷" ] , [ "Spain" , "🇪🇸" ] , [ "Ethiopia" , "🇪🇹" ] , [ "European Union" , "🇪🇺" ] , [ "Finland" , "🇫🇮" ] , [ "Fiji" , "🇫🇯" ] , [ "Falkland Islands" , "🇫🇰" ] , [ "Micronesia" , "🇫🇲" ] , [ "Faroe Islands" , "🇫🇴" ] , [ "France" , "🇫🇷" ] , [ "Gabon" , "🇬🇦" ] , [ "Hong Kong SAR China" , "🇭🇰" ] , [ "Indonesia" , "🇮🇩" ] , [ "Ireland" , "🇮🇪" ] , [ "Israel" , "🇮🇱" ] , [ "Isle of Man" , "🇮🇲" ] , [ "India" , "🇮🇳" ] , [ "Slovenia" , "🇮🇸" ] , [ "Italy" , "🇮🇹" ] , [ "Japan" , "🇯🇵" ] , [ "South Korea" , "🇰🇷" ] , [ "Macau Sar China" , "🇲🇴" ] , [ "Mexico" , "🇲🇽" ] , [ "Malaysia" , "🇲🇾" ] , [ "Netherlands" , "🇳🇱" ] , [ "Philippines" , "🇵🇭" ] , [ "Romania" , "🇷🇴" ] , [ "Serbia" , "🇷🇸" ] , [ "Russia" , "🇷🇺" ] , [ "Rwanda" , "🇷🇼" ] , [ "Saudi Arabia" , "🇸🇦" ] , [ "Solomon Islands" , "🇸🇧" ] , [ "Seychelles" , "🇸🇨" ] , [ "Sudan" , "🇸🇩" ] , [ "Sweden" , "🇸🇪" ] , [ "Singapore" , "🇸🇬" ] , [ "Thailand" , "🇹🇭" ] , [ "Tunisia" , "🇹🇳" ] , [ "Tonga" , "🇹🇴" ] , [ "Turkey" , "🇹🇷" ] , [ "Tuvalu" , "🇹🇻" ] , [ "Taiwan" , "🇨🇳" ] , [ "United Kingdom" , "🇬🇧" ] , [ "U.S. 
var body = $response.body;
var obj = JSON.parse(body);
var title = flags.get(obj['country']) + ' '+ obj['country'];
var subtitle =''+' '+obj['city'];
var ip = obj['ip'];
var description = obj['country'] + '\n' + ValidCheck(obj['city']) + '\n'+ obj['ip'];


$done({title, subtitle, ip, description});
