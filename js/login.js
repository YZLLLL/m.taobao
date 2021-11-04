$(function() {
    $('.eye').click(function() {
        if ($('#pwd').attr('type') == 'password') {
            $('#pwd').attr('type', 'text');
        } else {
            $('#pwd').attr('type', 'password');
        };
        $(this).toggleClass('icon-kejian icon-bukejian');
    });

    $('#login').click(function() {
        if (window.localStorage.getItem($('#username').val()) == $('#pwd').val()) {
            setCookie('username', $('#username').val(), 7);
            setCookie('password', $('#pwd').val(), 7)
            window.location.href = "index.html";
        } else {
            alert('用户名或密码错误')
        }
    });






    // 设置cookie
    function setCookie(cname, cvalue, exdays) {
        var d = new Date();
        if (exdays) {
            d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
            var expires = "expires=" + d.toUTCString();
            document.cookie = cname + "=" + cvalue + "; " + expires;
        } else {
            document.cookie = cname + "=" + cvalue;
        }
    }

    // 读取cookie
    function getCookie(cname) {
        var name = cname + "=";
        var ca = document.cookie.split(';');
        for (var i = 0; i < ca.length; i++) {
            var c = ca[i].trim();
            if (c.indexOf(name) == 0) return c.substring(name.length, c.length);
        }
        return '未登录';
    };

    // 删除指定cookie
    function delCookie(cname) {
        setCookie(cname, '', -1);
    };












})