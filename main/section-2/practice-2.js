'use strict';

module.exports = function countSameElements(collection) {
   var result =[];
   for(var i=0;i<collection.length;i++){
       result = isExist(collection[i],result);
   }
   return result;
    function isExist(element,result) {
       var keycount =element.split("-");
       var key = keycount.length==1?element:keycount[0];
       var count = keycount.length==1?1:keycount[1];
       for(var i=0;i<result.length;i++){
          if (result[i].key==key){
              result[i].count +=parseInt(count);
              return result;
          }
       }
        result.push({"key":key,"count":parseInt(count)});
        return result;

    }
}