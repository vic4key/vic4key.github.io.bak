$(document).ready(function(){
	$("#mn_about").click(function() {
		var home_header  = $(this).text();
		var home_content = "";
		$("#md_modal > .modal-dialog > .modal-content > .modal-header > .modal-title").text(home_header);
		$("#md_modal > .modal-dialog > .modal-content > .modal-body > p").html(home_content);
	});

	$("#mn_about").click(function() {
		var about_header  = $(this).text();
		var about_content = "This is the about content.";
		$("#md_modal > .modal-dialog > .modal-content > .modal-header > .modal-title").text(about_header);
		$("#md_modal > .modal-dialog > .modal-content > .modal-body > p").html(about_content);
	});
});