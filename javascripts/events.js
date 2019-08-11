$(document).ready(function(){
	$("#mn_about").click(function() {
		var home_header  = $(this).text();
		var home_content = "123";
		$("#md_modal > .modal-dialog > .modal-content > .modal-header > .modal-title").text(home_header);
		$("#md_modal > .modal-dialog > .modal-content > .modal-body > div").html(home_content);
	});

	$("#mn_about").click(function() {
		var about_header  = $(this).text();
		var about_content = $("#footer * span").text();
		$("#md_modal > .modal-dialog > .modal-content > .modal-header > .modal-title").text(about_header);
		$("#md_modal > .modal-dialog > .modal-content > .modal-body").html(about_content);
	});
});