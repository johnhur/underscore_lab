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
		shuffle: function() {},
		sample: function(x) {
			return x[Math.floor((Math.random()*x.length))];
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
		indexOf: function() {},
		pluck: function(x) {}
	};
}();