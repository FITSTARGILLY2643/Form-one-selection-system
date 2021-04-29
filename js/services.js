$(document).ready(function(){
    $(".one").mouseover(function(){
      $("#p-text").show(500);
    // }).mouseout(function(){
    //   $("p-text").hide(100);
    });
  });
  $(document).ready(function(){
    $(".one").mouseout(function(){
      $("#p-text").hide(200);
    });
  });