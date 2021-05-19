new Swiper('.image-slider', {
    // стрелки управления
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    // Навигация
    // Буллеты, текущее положение, прогрессбар
    pagination: {
        el: '.swiper-pagination',
        /* // Буллеты
        clickable: true,
        //Динамические буллеты
        dynamicBullets: true,
        //Кастомные буллеты
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + '</span>';
        }, */
        // Фракции 
        //type: 'fraction',
        // Кастомный вывод фракции
        /* renderFraction: function (currentClass, totalClass) {
            return 'Фото <span class ="' + currentClass + '"></span>' + 
            ' из ' + 
            '<span class="' + totalClass + '"></span>';
        }, */
        // Прогрессбар
        type: 'progressbar'
    },
})