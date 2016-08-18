function Chart(options) {
	this.options = options,
		this.options.buffer = 25,
		this.options.minHeight = 50,
		this.options.minWidth = 50,
		this.options.height = this.options.height || this.options.minHeight,
		this.options.width = this.options.width || this.options.minWidth;
	console.log(this.options.data);
}
Chart.prototype.create = function() {
	this.calc();

	this.elem = this.options.elem || document.createElementNS("http://www.w3.org/2000/svg", "svg");
	this.elem.setAttribute('xlink', 'http://www.w3.org/1999/xlink');
	util.addClass(this.elem, '_simchart');
	this.createChildren();
	this.size(this.options.height, this.options.width);
	
	return this.elem;
}
Chart.prototype.calc = function() {

}
Chart.prototype.size = function(height, width) {
	this.elem.setAttribute('width', height);
	this.elem.setAttribute('height', width);
	for (var i in this.children) {
		this.children[i].size();
	}
}
Chart.prototype.createChildren = function() {

}

function Series(options) {

}
Series.prototype.create = function() {

}
Series.prototype.calc = function() {

}
Series.prototype.size = function() {

}

function SeriesItem(options) {

}
SeriesItem.prototype.create = function() {

}
SeriesItem.prototype.calc = function() {

}
SeriesItem.prototype.size = function() {

}

function Axis(options) {
	this.options = {

		position: 'left',
		numerical: options.numerical || true,
		max: options.max || 10,
		min: options.min || 0,
		markers: options.markers || 4,
		availHeight: options.availHeight || 50,
		availWidth: options.availWidth || 50,
		labelOffset: 3
	};
	for (var key in options) {
		this.options[key] = options[key];
	}
this.pixelScale=null;

}
Axis.prototype.create = function() {

}
Axis.prototype.size = function() {

}

var util = {
	addClass: function(elem, className) {
		elem.classList.add(className);
	}

};