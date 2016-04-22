
var signup_box = document.getElementById('signup-box');
var switch_btn = document.getElementById('switch-btn');

document.getElementById('switch-btn').onclick = function(){
    $(signup_box).animate({left: "70%"}, 500);
    $(switch_btn).animate({right: "75%"}, 500);
}
