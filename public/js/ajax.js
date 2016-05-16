// Signup User Active
var signup_active = function(){

  var newUser = {
        'idname': $('input#signup-id').val(),
        'username': $('input#signup-name').val(),
        'password': $('input#signup-pass').val(),
        'imgname': (Math.floor((Math.random() * 10) + 1)).toString(),
        'imgContentData': "null",
        'imgContentType': "image/png"
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

// Update User Submit
var submitUser = function(){
  var imgFile = document.getElementById('edit-img-input').files[0];
  if(imgFile == null){
    var newUser = {
      'idname': $('#edit-idname').val()
    };
    $.ajax({
      type: 'PUT',
      data: newUser,
      url: '/member',
      dataType: 'JSON',
      success: function(data, textStatus) {
        if(data.update_status == 0){
          $("#update-err")[0].innerHTML = data.response;
          $('input#edit-idname')[0].value = "";
        }
        else if(data.update_status == 1){
            //success
            window.location.href = data.response;
        }
      }
    });
  }
  else{
    var reader = new FileReader();
    reader.readAsDataURL(imgFile);

    reader.addEventListener("load", function(){
      var newUser = {
        'idname': $('#edit-idname').val(),
        'imgContentData': reader.result
      };

      // Use AJAX to put the object to our updateuser service
      $.ajax({
        type: 'PUT',
        data: newUser,
        url: '/member',
        dataType: 'JSON',
        success: function(data, textStatus) {
          if(data.update_status == 0){
            $("#update-err")[0].innerHTML = data.response;
            $('input#edit-idname')[0].value = "";
          }
          else if(data.update_status == 1){
              //success
              window.location.href = data.response;
          }
        }
      });
    }, false);
  }
}
//edit img
var changeFileName = function(){
  var input = document.getElementById('edit-img-input');
  document.getElementById('edit-img-name').innerHTML = input.files[0].name;
}
//post img
var changeFileName1 = function(){
  var input = document.getElementById('img-input');
  document.getElementById('post-img-name').innerHTML = input.files[0].name;
  var output = document.getElementById('output-img-preview');
  output.src = URL.createObjectURL(event.target.files[0]);
  var div = document.getElementById("post-img-div");
  div.className += " img-div-style";
  div.classList.remove("display-none");
}
//

var control = $("#img-input"),
    clearBn = $("#delete-btn");
clearBn.on("click", function(){
    //control.replaceWith( control.val('').clone( true ) );
    control[0].value = "";
    $("#post-img-div").addClass("display-none");
    $("#post-img-div").removeClass("img-div-style");
    $("#post-img-name")[0].innerHTML = "請選擇一張照片";

});
