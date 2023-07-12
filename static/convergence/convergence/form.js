$('.dl_report').on('click', function () {
  var form = $(this).data('form');
  var formId = $(this).data('form-id');
  var id = $(this).data('id');
  if (form) {
    $('#' + id).addClass('show');
    let button = '#' + id + ' form .btn-cta';

    $(button).removeClass('TM_74');
    $(button).removeClass('TM_75');
    $(button).removeClass('TM_76');
    $(button).removeClass('TM_77');

    $(button).addClass(formId);
    $('body').addClass('no-scroll');
  } else {
    $('#download_report')[0].click();
  }
});

$('.download-form').on('submit', function (e) {

  let results = $('.download-form').serializeArray();
  let email = '';
  let regionalFocus = '';
  results.forEach(function (item, index) {
    switch(item.name) {
      case 'EMAIL':
        email = item.value;
        break;
      case 'eap':
        regionalFocus += 'East Asia Pacific ';
        break;
      case 'sa':
        regionalFocus += 'South Asian ';
        break;
      case 'eca':
        regionalFocus += 'Europe & Central Asia ';
        break;
      case 'mena':
        regionalFocus += 'Middle East & North Africa ';
        break;
      case 'lac':
        regionalFocus += 'Latin American & the Caribbean ';
        break;
      case 'ssa':
        regionalFocus += 'Sub-Saharan Africa ';
        break;
    }
  });

  $('#mce-MMERGE9').val(regionalFocus);

  let valid = validateEmail(email);

  if (valid) {
    e.preventDefault();
    $('#download_report')[0].click();
    $('.email-input').removeClass('error');
  } else {
    e.preventDefault();
    $('.email-input').addClass('error');
  }


});

function validateEmail(email) {
  if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email))
  {
    return true
  }
  return false
}
