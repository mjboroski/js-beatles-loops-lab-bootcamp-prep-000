function theBeatlesPlay(musicians, instruments){
  var array = {};
  for (var i=0;i<musicians.length;i++){
    array[i]='${musicians} plays ${instrument}';
  }
  return array;
}