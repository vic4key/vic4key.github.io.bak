$(document).ready(function()
{
	/* $("[data-toggle=\"tooltip\"]").tooltip(); */

	$("#mn_about").click(function()
	{
		var about_header  = $(this).text();
		var about_content = $("#footer * span").text();
		$("#md_modal > .modal-dialog > .modal-content > .modal-header > .modal-title").text(about_header);
		$("#md_modal > .modal-dialog > .modal-content > .modal-body").html(about_content);
	});
});