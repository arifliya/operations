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


// to add a URL to the button when any radio button is select - ADD NEW PROVIDER PAGE //
$('#bulkOrSingle').click(function() {
   if($('#changed-name-1').is(':checked')) { location.href='/1-1-0/new-provider-details'; }
	 else if ($('#changed-name-2').is(':checked')) { location.href='/1-1-0/upload-provider-list'; }

   // else if(!$('.govuk-radios__item input').is(':checked')) {
   //   $('#formError').addClass('govuk-form-group--error');
   //   $('.govuk-error-summary').removeClass('hide');
   //   $('.govuk-error-message').removeClass('hide');
   // }
});


// create a container for assignments //

// $(document).ready(function() {
//     $('#btnSave').click(function() {
//         addCheckbox($('#txtName').val());
//     });
// });
//
// function addCheckbox(name) {
//    var container = $('#cblist');
//    var inputs = container.find('input');
//    var id = inputs.length+1;
//
//    $('<input />', { type: 'checkbox', id: 'cb'+id, value: name }).appendTo(container);
//    $('<label />', { 'for': 'cb'+id, text: name }).appendTo(container);
// }


$("#addAssignment").click(function(){
  var value = $(".assignment-value").val();
  var checkvalue = $(".assignment").val();

  $('.over-right').remove();
  $('#noActive').remove();

  if($('.assignment').is(':checked')) {
     $(".active-assignments").append("<div><p class='govuk-body over-right'>" + checkvalue + "</p> <p class='govuk-body over-right'> " + value + "<a href='#' class='govuk-link remove-assignment'>Remove</a></p></div>");
   }

   var value2 = $(".assignment-value2").val();
   var checkvalue2 = $(".assignment2").val();

   if($('.assignment2').is(':checked')) {
      $(".active-assignments").append("<p class='govuk-body over-right'>" + checkvalue2 + "</p> <p class='govuk-body over-right'> " + value2 + "<a href='#' class='govuk-link'>Remove</a> </p>");
    }

    var value3 = $(".assignment-value3").val();
    var checkvalue3 = $(".assignment3").val();

    if($('.assignment3').is(':checked')) {
       $(".active-assignments").append("<p class='govuk-body over-right'>" + checkvalue3 + "</p> <p class='govuk-body over-right'> " + value3 + "<a href='#' class='govuk-link'>Remove</a> </p>");
     }

});

$(".remove-assignment").click(function(){
  alert('clicked');
})
// $('#radio_value').click(function() {
// $('#result').empty();
// var value = $("form input[type='radio']:checked").val();
// if($("form input[type='radio']").is(':checked')) {
// $('#result').append("Checked Radio Button Value is :<span> "+ value +" </span>");
// }else{
// alert(" Please Select any Option ");
// }
// });


// autocomlete option select function //

$(".autocomplete__menu").click(function() {
  $("#searchProviders").trigger("click");
});



// to add collection typess

$("#inactiveAssignments #1a a").click(function(){
  $("#inactiveAssignments #1a").hide();
  $("#inactiveAssignments #2a").hide();
  $("#activeAssignments #1b").show();
  $("#noActive").hide();
});

$("#activeAssignments #1b a").click(function(){
  $("#activeAssignments #1b").hide();
  $("#inactiveAssignments #1a").show();
  $("#inactiveAssignments #2a").show();
  $("#noActive").show();
})

$("#inactiveAssignments a").click(function(){
  $("#buttonGroup").show();
});

$("#activeAssignments a").click(function(){
  $("#buttonGroup").show();
});


// var firstDonut = $('#firstDonut').text();
//
// $('#first').attr('stroke-dasharray', firstDonut +', 100');
