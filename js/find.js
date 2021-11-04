$(function() {
    var dataInt = {
        "data": [{
            "url": "./image/find1.jpg",
            "text": "你好"
        }, {
            "url": "./image/find3.jpg",
            "text": "你好"
        }, {
            "url": "./image/find5.jpg",
            "text": "你好"
        }, {
            "url": "./image/find2.jpg",
            "text": "你好"
        }, {
            "url": "./image/find4.jpg",
            "text": "你好"
        }, {
            "url": "./image/find1.jpg",
            "text": "你好"
        }, {
            "url": "./image/find3.jpg",
            "text": "你好"
        }, {
            "url": "./image/find5.jpg",
            "text": "你好"
        }, {
            "url": "./image/find2.jpg",
            "text": "你好"
        }, {
            "url": "./image/find4.jpg",
            "text": "你好"
        }]
    };


    const $container = $('#container');

    // 记录最新的盒子
    let boxNum = 0;
    // 记录每列高度的数组
    let heightArr = [];


    // 先执行1次
    for (let i = 0; i < dataInt['data'].length; i++) {
        let box = $(`<div class="box">
        <div class="pic">
            <img src=${dataInt['data'][i]['url']} alt="">
            <span>${dataInt['data'][i]['text']}</span>
        </div>
    </div>`);
        $container.append(box);
    }
    waterfall();









    function waterfall() {
        // 视口宽度
        const bodyWidth = document.body.clientWidth;
        // box实际宽度
        const boxWidth = document.getElementsByClassName('box')[0].offsetWidth;
        // 计算分几列
        let col = Math.trunc(bodyWidth / boxWidth);
        // 拿到box数组
        const boxArr = Array.from(document.getElementsByClassName('box'));

        for (let i = boxNum; i < boxArr.length; i++) {
            if (i < col) {
                heightArr.push(boxArr[i].offsetHeight);
            } else {
                let minHeight = Math.min(...heightArr);
                let minIndex = getMinIndex(heightArr, minHeight);
                let boxWidth = boxArr[i].offsetWidth;
                boxArr[i].style.position = 'absolute';
                boxArr[i].style.top = `${minHeight}px`;
                boxArr[i].style.left = `${minIndex * boxWidth}px`;
                heightArr[minIndex] += boxArr[i].offsetHeight;
            }
            boxNum++;
        }
    }


    let timer;
    $(window).scroll(function() {
        clearTimeout(timer);
        timer = setTimeout(pubu, 200)
    })





    function pubu() {
        const div = Array.from(document.getElementsByClassName('box'));
        const divTop = div[div.length - 1].offsetTop;
        // 滚动高度
        const scrollTop = $(window).scrollTop();
        // 视口宽度
        const bodyWidth = document.body.clientWidth;

        if (divTop - scrollTop - bodyWidth < 500) {
            for (let i = 0; i < dataInt['data'].length; i++) {
                let box = $(`<div class="box">
                <div class="pic">
                    <img src=${dataInt['data'][i]['url']} alt="">
                    <span>${dataInt['data'][i]['text']}</span>
                </div>
            </div>`);
                $container.append(box);
            }
            waterfall();
        }

    }



    $('.m-item').click(function() {
        $(this).addClass('s-active').siblings().removeClass('s-active');

    })










    function getMinIndex(arr, minValue) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] == minValue) {
                return i;
            }
        }
    }
})