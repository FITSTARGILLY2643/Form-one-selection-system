$("#column_select").change(function () {
    $("#layout_select")
        .find("option")
        .show()
        .not("option[value*='" + this.value + "']").hide();

    $("#layout_select").val(
        $("#layout_select").find("option:visible:first").val());

        $("button").click(function(event){
          $("#box").show();
          event.preventDefault()
        });

}).change();


// $(document).ready(function(){
    
//   });

