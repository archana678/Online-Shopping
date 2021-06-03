$(document).ready(function(){
    $('.menu-toggle').click(function(){
        $('.menu-toggle i').toggleClass("active");
        $('.navbar .list').toggleClass("active");
    })
    $('#autoWidth').lightSlider({
        adaptiveHeight:true,
        auto:true,
        item:1,
        slideMargin:0,
        loop:true
    });
    $('#adaptive').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
    $('#autowidth').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        } 
    });  
    $('#auto').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth').removeClass('cS-hidden');
        }
    })
        $('#width').lightSlider({
            adaptiveHeight:true,
            item:1,
            slideMargin:0,
            loop:true
        });
        $('.fa-user').click(function(){
            $('.form-1').addClass('login-active')
      })
        $('.form-cancel').click(function(){
            $('.form-1').removeClass('login-active')
       })
       $('.sign-up-btn').click(function(){
            $('.form-2').addClass('sign-up-active')
       })
       $('.form-cancel').click(function(){
           $('.form-2').removeClass('sign-up-active')
      })
      $('.forget').click(function(){
        $('.form-1').addClass('login-active');
     })
      $('.forget').click(function(){
        $('.form-2').removeClass('sign-up-active');
     })
    });

