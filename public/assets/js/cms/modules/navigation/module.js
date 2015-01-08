$("#modules-navigation #submit").click(function(e){
    e.preventDefault;
    var navType = $('input[name=orientation]:checked', '#myForm').val()
   $("#cms-editor-interface").append('<nav class="'+navType+'"><ul><li></li></u></nav>');

})
