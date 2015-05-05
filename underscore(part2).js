var _ = function() {
  return {
    each: function(arr, func) {
      for(var i = 0; i < arr.length -1; i++) {
        func(arr[i]);
      }
      return func(arr[i]);
    },
    compact: function(x) {
      var arr = [];
      for(var i = 0; i < x.length; i++) {
        if (x[i] !== undefined) {
          arr.push(x[i]);
        }
      }
      return arr;
      
    },
    map: function(x, func) {
      var arr = [];
      for(var i = 0; i < x.length; i++) {
        arr.push(func(x[i]));
      }
      return arr;
    },
    filter: function(x, func) {
      var arr = [];
      for(var i = 0; i < x.length; i++) {
        arr.push(func(x[i]));
      }
      return arr;
    },
  };
}();

_.filter([1,2,3,4,5,6], (function(num){ if (num % 2 === 0) {return num;}));

