
  // $(document).ready(function() {
  //   $("#place0").click(function() {
  //     $("#nairobi").text().show();
      
  //   });
  // });

  $(document).ready(function() {
    $("#column_select").change(function () {
        $("#layout_select")
            .find("option")
            .show()
            .not("option[value*='" + this.value + "']").hide();
       
        $("#layout_select").val(
            $("#layout_select").find("option:visible:first").val());
        
    }).change();
});