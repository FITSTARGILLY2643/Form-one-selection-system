/* Email address and username input function */
$(document).ready(function(){
    $("#input-form").submit(function(event){
      let name = $("input#name").val();
      let email = $("input#email").val();
      let comment = $("textarea#textarea").val();
      if ($("input#name").val() && $("input#email").val() && $("textarea#textarea").val()){
        alert (name + ", we have received your email. We highly value your feedback.");
      }
      else if ($("input#name").val() && $("input#email").val()){
        alert (name + ", we have received your email. Kindly fill in the comment box below.");
      }
      else {
        alert("Please enter your correct name and email adress!");
      }
    
    });

  });