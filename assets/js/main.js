
$("#D").countdown('2021/12/12',function(event){
    $(this).html(event.strftime('%D'))
    $("#H").html(event.strftime('%H'))
    $("#M").html(event.strftime('%M'))
    $("#S").html(event.strftime('%S'))
})