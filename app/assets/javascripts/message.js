$(document).on('turbolinks:load', function(){

  function buildHTML(message){
    var html = `<div class="message">
                  <div class="upper-message">
                    <div class="upper-message__user-name">
                      ${message.user_name }
                    </div>
                    <div class="upper-message__date">
                      ${message.created_at}
                    </div>
                  </div>
                  <div class="lower-message">
                    <p class="lower-message__content">
                      ${message.content}
                    </p>
                    <img class="lower-message__image" src="${message.image}">
                  </div>
                </div>`
    return html;
  }


  $('#new_message').on('submit', function(e){
    e.preventDefault();
    var formData = new FormData(this);
    var url = $(this).attr('action');
    $.ajax({
      url: url,
      type: "POST",
      data: formData,
      dataType: 'json',
      processData: false,
      contentType: false
    })

    .done(function(data){
      if(data.image == null){
        data.image = ""
      }
      var html = buildHTML(data);
      var element = document.getElementById("messages");
      var height = element.scrollHeight;
      $('.messages').append(html);
      $('.form__message').val('');
      $('#message_image').val('');
      $(".messages").animate({scrollTop: height }, 500);
    })

    .fail(function(){
      alert('error');
    })

    return false;

  })
});