$( document ).on('turbolinks:load', function() {
    $("#new_message").on("keypress", function(e){
        if (e.keyCode === 13 ){
            e.preventDefault();
            $("#new_message").submit();
        }
    });   
});
