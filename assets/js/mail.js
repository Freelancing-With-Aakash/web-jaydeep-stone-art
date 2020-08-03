(function ($) {
  'use strict';

  $('#contact-form').on('submit', function () {
    var send_btn = $('#send-form'),
      formdata = $(this).serialize(),
      check = $('#form-check');
    send_btn.text('Sending...');

    function resetform() {
      $('#Name').val('');
      $('#Email').val('');
      $('#Subject').val('');
      $('#Message').val('');
    }

    $.ajax({
      url: '',
      type: 'POST',
      data: formdata,

      success: function (text) {
        if (text === 'success') {
          send_btn.text('Message Sent');
          setTimeout(function () {
            resetform();
            send_btn.text('Send Message');
          }, 4000);
        } else {
          send_btn.text('Fail To Sending A Message');
          setTimeout(function () {
            resetform();
            send_btn.text('Send Message');
          }, 2500);
        }
      },
    });
    return false;
  });

  $('#quote').on('submit', function () {
    var send_btn = $('#send-quote'),
      formdata = $(this).serialize(),
      check = $('#form-check');
    send_btn.text('Sending...');

    function resetform() {
      $('#Name').val('');
      $('#Email').val('');
      $('#Subject').val('');
      $('#Message').val('');
    }

    $.ajax({
      url: '',
      type: 'POST',
      data: formdata,

      success: function (text) {
        if (text === 'success') {
          send_btn.text('Submitted');
          setTimeout(function () {
            resetform();
            send_btn.text('Send Message');
          }, 4000);
        } else {
          send_btn.text('Fail To Submit');
          setTimeout(function () {
            resetform();
            send_btn.text('Send Message');
          }, 2500);
        }
      },
    });
    return false;
  });
})(jQuery);
