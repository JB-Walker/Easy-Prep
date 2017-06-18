$(function() {   // .ready function

function getString(pathOfFile) {
  var request = new XMLHttpRequest();
  request.open("GET", pathOfFile, false);
  request.send(null);
  var returnValue = request.responseText;
  return returnValue;
}


//  var text = fileHelper.getString ( "cards.txt" );





//var arrayBuffer= [];
//$.get("file://localhost/cards.txt", function(data) {
//  arrayBuffer = data;
//});
//console.log("arrayBuffer length: "+ arrayBuffer.length);

var cardData = [
  [], [], [], [], [], [], [], [], [], []
]

//var bufferElement = 0;
for (card=0; card<=24; card++) {
  console.log("card: "+card);
  for (item=0; item<=9; item++) {
    console.log("item: "+item);
    cardData[card][item] = getString("cards.txt");
    console.log(cardData[card][item]);
    bufferElement++;
  }
}







});
