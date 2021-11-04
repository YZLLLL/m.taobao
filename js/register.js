$(function() {
    let phoneAble = false;
    let yzmAble = false;
    let pwdAble = false;
    let yzm;
    $('#yzm').click(function() {
        let a = Math.floor(Math.random() * 10);
        let b = '' + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10) + Math.floor(Math.random() * 10);
        yzm = b;
        $(this).text(b)
    });
    $('#telephone').blur(function() {
        let phoneValue = $(this).val();
        if (/^(?:(?:\+|00)86)?1(?:(?:3[\d])|(?:4[5-79])|(?:5[0-35-9])|(?:6[5-7])|(?:7[0-8])|(?:8[\d])|(?:9[189]))\d{8}$/.test(phoneValue)) {
            phoneAble = true;
        };
        isAble();
    });
    // 密码强度校验，最少6位，包括至少1个大写字母，1个小写字母，1个数字，1个特殊字符
    $('#pwd').blur(function() {
        let pwdValue = $(this).val();
        if (/^\S*(?=\S{6,})(?=\S*\d)(?=\S*[A-Z])(?=\S*[a-z])(?=\S*[!@#$%^&*? ])\S*$/.test(pwdValue)) {
            pwdAble = true;
        };
        isAble()
    })
    $('#jym').blur(function() {
        let jym = $(this).val();
        if (jym == yzm) {
            yzmAble = true;
        };
        isAble();
    });
    $('#register').click(function() {
        if (phoneAble && yzmAble && pwdAble) {
            if (window.localStorage.getItem($('#telephone').val()) == null) {
                window.localStorage.setItem($('#telephone').val(), $('#pwd').val());
                $('body').html('注册成功，3秒后返回登录');
                let i = 3;
                let timer = setInterval(function() {
                    i--;
                    $('body').html(`注册成功，${i}秒后返回登录`);
                }, 1000);
                setTimeout(function() {
                    clearInterval(timer);
                    window.location.href = "login.html";
                }, 3000);
            } else {
                alert("手机号已注册")
            }
        }
    });

    function isAble() {
        if (phoneAble && yzmAble && pwdAble) {
            $('#register').addClass('able')
        } else {
            $('#register').removeClass('able')
        }
    }
})