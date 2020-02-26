
exports.min = function min (array) {
  if (array == null || array == undefined || array.length == 0){
    return 0;
  }
  var b = array[0];
  for ( var i = 0; i < array.length; i++){
    if ( b > array[i]){
      b = array[i];
    }
  } return b;
}

exports.max = function max (array) {
  if (array == null || array == undefined || array.length == 0){
    return 0;
  }
  var b = array[0];
  for ( var i = 0; i < array.length; i++){
    if ( b < array[i]){
      b = array[i];
    }
  } return b;
}

exports.avg = function avg (array) {
  if (array == null || array == undefined || array.length == 0){
    return 0;
  }
  var sum = 0;
  for ( var i = 0; i < array.length; i++){
    sum += array[i];
  }

  return (sum/array.length);
}