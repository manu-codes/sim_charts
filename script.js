// Add your javascript here
$(function() {
	$("h1").animate({
		"margin-left": "100px"
	}, "slow");

	$(document).ready(function() {

		var dt = [{
			name: 'IN',
			val: 10,
			val2: 23
		}, {
			name: 'US',
			val: 20,
			val2: 27
		}, {
			name: 'CH',
			val: 15,
			val2: 33
		}]
		$("div").chart({
			data: dt,
			series: [{
				name: 'val',
				displayName: 'Sales'
			}, {
				name: 'val2',
				displayName: 'Revenue'
			}],
			category: {
				name: 'name',
				displayName: 'Country'
			}
		});

	})



});