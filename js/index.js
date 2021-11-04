$(function() {

    // 无限加载
    let fdTimer;
    $(window).scroll(function() {
        clearTimeout(fdTimer);
        fdTimer = setTimeout(function() {
            // body总高度
            let bch = document.body.clientHeight;
            // 滚动高度
            let ws = $(window).scrollTop();
            // 视口高度
            let ddc = document.documentElement.clientHeight;
            if ((bch - ws - ddc) < 200) {
                myAjax();
            }
        }, 1000)
    })



    function myAjax() {
        $.ajax({
            url: './js/json.js',
            type: 'get',
            success: function(msg) {
                let data = JSON.parse(msg);
                const $a = $('.like-list');
                $('#loading').remove();
                data.forEach(function(value) {
                    const $li = $(`<div class="list-item">
                    <img src=${value['src']} alt="">
                    <span>${value['name']}</span>
                    <div><span class="l-l-l">￥<span>${value['price']}</span></span><span  class="l-l-r"><span class="count">${value['buyers']}</span>人已购</span>
                    </div>
                </div>`);
                    $a.append($li);
                });
                let $jiazai = $(`<div id='loading'>正在加载...</div>`);
                $('.like').append($jiazai);
            }

        })
    };
    myAjax();
})