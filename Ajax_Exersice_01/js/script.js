
$(document).ready(function (){
    $('main').load('content.html #home');

    $('a').click(function (){
        var ClickLink = $(this).attr('id');
        alert(ClickLink);
        $('main').load('content.html #'+ClickLink);
    });
})