function scrappe() {
  //https://gist.githubusercontent.com/UwUDev/eae1cfa1bc8a2a1252c45e9affb34c3e/raw/thighs.pics
  var xmlHttp = new XMLHttpRequest();
  xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
  xmlHttp.send( null );
  var splits xmlHttp.responseText.split('\n');
  console.log(splits.lengt)
}
