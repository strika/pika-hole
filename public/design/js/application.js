$(function() {
	var toggleCheckbox = function() {
		$(this).toggleClass("glyphicon-unchecked glyphicon-check");
	};
	
	$("span.glyphicon").click(toggleCheckbox);
});