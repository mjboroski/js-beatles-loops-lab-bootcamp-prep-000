function theBeatlesPlay(musicians, instruments){
  var array = [];
  for (var i=0;i<musicians.length;i++){
    array[i]=musicians[i]+" plays "+instruments[i];
  }
  return array;
}

function johnLennonFacts(facts) {
  var j=0;
  while (j<facts.length){
    facts[j]=facts[j]+"!!!";
    j++;
  }
  return facts;
}
