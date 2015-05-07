module.exports = {
		average: function(x) {
			var sum = 0;
			for(var i = 0; i <= x.length -1; i++) {
				sum += x[i];
			}
			return sum/(x.length);
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
		compact: function(x) {
      		var arr = [];
      		for(var i = 0; i < x.length; i++) {
        		if (x[i] !== undefined) {
          			arr.push(x[i]);
        		}
      		}
      		return arr;
      	},
      	map: function(arr, func) {
      		var result = [];
			if(!func) {
				return "you need to pass in a new function";
			}
			for(var i = 0; i<arr.length; i++) {
				result.push(func(arr[i]));
				}
				return result;
	},
};
