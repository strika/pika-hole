$(function() {
	var toggleCheckbox = function() {
		$(this).toggleClass("glyphicon-unchecked glyphicon-check");
	};

	var showVideo = function() {
		var options = { direction: "right" },
			$video = $(".video-full"),
			$body = $("body");
		
		$body.css({ overflow: "hidden" });
		$video.css({ width: $(window).width(), height: $(window).height() });
		$video.toggle("slide", options, 200 );
		
		return false;
	};
	
	$("span.glyphicon").click(toggleCheckbox);
	$("a").click(showVideo);
});