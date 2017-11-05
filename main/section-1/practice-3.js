'use strict';

module.exports = function collectSameElements(collectionA, objectB) {
  var zArray = new Array();
    var collectionB=objectB;
  for(var i=0;i<collectionA.length;i++){
    for(var j=0;j<collectionB.value.length;j++){
      if(collectionA[i]==collectionB.value[j]){
          zArray.push(collectionA[i])
      }
    }
  }
  return zArray;
}
