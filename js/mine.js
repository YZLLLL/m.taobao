$(function() {


    $('#username').text(getCookie('username'));

    // 注销
    $('#zhuxiao').click(function() {
        delCookie('username');
        delCookie('password');
        window.location.href = "login.html";
    })

    let $width = document.body.clientWidth;
    let $height = 2 * $width / 3;
    $('#goodsOrder').css({
        height: $height + 'px'
    });
    $('.more').css({
        lineHeight: $height / 2 + 'px'
    });





















})