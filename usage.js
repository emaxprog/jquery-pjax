    $(document).pjax('a', '.pjax-container', {fragment: '.pjax-container'});
    //Подгрузка активной ссылки
    $('.pjax-container').on('pjax:success', function () {
        $.pjax({
            url: window.location.href,
            container: 'menu',
            fragment: '.menu'
        });
    });