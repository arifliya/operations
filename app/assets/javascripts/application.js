/* global $ */

// Warn about using the kit in production
if (window.console && window.console.info) {
  window.console.info('GOV.UK Prototype Kit - do not use for production')
}

$(document).ready(function () {
  window.GOVUKFrontend.initAll()
})

$("#typeFilter :checkbox").click(function() {
    $(".cards").hide();
    $("#typeFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#typeFilter :checkbox").is(':checked')) {
      $(".cards").show();
    }
});

$("#yearFilter :checkbox").click(function() {
    $(".year-groups").hide();
    $("#yearFilter :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });

    if (!$("#yearFilter :checkbox").is(':checked')) {
      $(".year-groups").show();
    }
});
