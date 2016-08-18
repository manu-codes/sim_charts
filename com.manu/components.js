(function($) {
	$.fn.chart = function(options) {

		options = options || {};
		options.axisOptions = options.axes ?
			null : options.axisOptions || [{numerical:true}, {numerical:false,position:'bottom'}];
		var axes = options.axes || options.dualAxis ? [new Axis(options.axisOptions[0]), new Axis(options.axisOptions[1]), new Axis(options.axisOptions[2])] : [new Axis(options.axisOptions[0]), new Axis(options.axisOptions[1])] ;


		var ch = new Chart({
			axes: axes,
			series: options.series,
			data :options.data,
			
		});
		this.append(ch.create());
	}
})(jQuery)