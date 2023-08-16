
$(document).ready(function (){
    $('main').load('content.html #home');

    $('a').click(function (){
        $('main').html(' <div class="loading">\n' +
            '          <img src="img/Loading_icon.gif" alt="loading">\n' +
            '      </div>');
        var ClickLink = $(this).attr('id');
        alert(ClickLink);
        $('main').load('content.html #'+ClickLink);
    });
})