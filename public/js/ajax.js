var signup_active = function(){

  var newUser = {
        'idname': $('input#signup-id').val(),
        'username': $('input#signup-name').val(),
        'password': $('input#signup-pass').val(),
        'imgname': (Math.floor((Math.random() * 10) + 1)).toString()
      };

  $.ajax({
        type: 'POST',
        data: newUser,
        url: '/signup',
        dataType: 'JSON',
        success: function(data, textStatus) {
          console.log(000);
        if(data.signup_status == 0){
            //Failed
            $("#signup-err")[0].innerHTML = data.response;
            $('input#signup-id')[0].value = "";
            $('input#signup-name')[0].value = "";
            $('input#signup-pass')[0].value = "";
        }
        else if(data.signup_status == 1){
            //success
            window.location.href = data.response;
        }
      },
        error: function(res,err){
          console.log(err);
        }
    });
}
