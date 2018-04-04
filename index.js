function theBeatlesPlay(musicians, instruments){
  var array = {};
  for each i in musicians{
    array[i]=musicians[i]+" plays "+instruments[i];
  }
  return array;
}
