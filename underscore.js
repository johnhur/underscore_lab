var _ = function () {
	return {
		average: function(x) {
			var sum = 0;
			for(var i = 0; i <= x.length -1; i++) {
				sum += x[i];
			}
			return sum/(x.length);
		},
		contains: function(x, y) {
			for (var i = 0; i <= x.length -1; i++) {
				if (y === x[i]) {
					return true;
			}   
			}
		},
		first: function(x) {
			var i = 0;
			return x[i];
		},
		last: function(x) {
			var i = x.length - 1;
			return x[i];
		},
		max: function(x) {
			var greatest = 0;
			for (var i = 0; i <= x.length - 1; i++) {
				if (x[i] > greatest) {
					greatest = x[i];
				}
			}
			return greatest;
		},
		min: function(x) {
			var smallest = x[0];
			for (var i =1; i <= x.length - 1; i++) {
				if (x[i] < smallest) {
					smallest = x[i];
				}
			}
			return smallest;
		},
		shuffle: function() {
				var rand1 = Math.floor(Math.random() * arr.length);
				var rand2 = Math.floor(Math.random() * arr.length);
				var temp = arr[rand2];
				arr[rand2] = arr[rand1];
				arr[rand1] = temp;
			console.log(arr);
		},
		sample: function(arr, num) {
 			 var rand;
 			 if(num) {
    			var result = [];
    				for (var i = 0; i < num; i ++) {
      				rand = Math.floor(Math.random() * arr.length);
      				result.push(arr[rand]);
    }
   			console.log(result);
  			} else {
     			var rand = Math.floor(Math.random() * arr.length);
      				console.log(arr[rand]);
  }
		},
		difference: function(x,y) {
			var miss = [];
			for(var i = 0; i <= x.length; i++) {
				for(var j = 0; j <= y.length; j++) {
					var missing = false;
					if (x[i] === y[j]) {
						 missing = false;	
					}
					else {
						 missing = true;}
              if (missing === true) {
				  miss.push(x[i]);
				}
				}
			}
			return miss;
		}, // difficulty with the difference function :(
		indexOf: function (inputArray, inputValue) {
  for (var i = 0; i < inputArray.length; i ++) {
    if (inputArray[i] === inputValue){
      console.log(i);
    }
      return(-1);
  }
    
},
		pluck: function (list, inputKey) {
  var arr = [];
  for(var i = 0; i<list.length; i++) {
    arr.push(list[i][inputKey]);
  }
  return arr;
        }
	};
}();