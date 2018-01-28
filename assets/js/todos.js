$("ul").on("click", "li", function() {
  $(this).toggleClass("removeTodo");
});

$("ul").on("click", "span", function(event){
  $(this).parent().fadeOut(500, function(){
    $(this).remove();
  });
  event.stopPropagation();
});

$("input[type='text']").on("keypress", function(event){
  if(event.which === 13) {
    var todoText = $(this).val();
    $("ul").append("<li><span>X</span> "+ todoText +"</li>");
    $(this).val("");
  }
});
