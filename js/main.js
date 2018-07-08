ymaps.ready(function () {
  var myMap = new ymaps.Map('map', {
    center: [59.9393, 30.3294],
    zoom: 16,
    controls: []
  })

  var myPlacemark = new ymaps.Placemark([59.938631, 30.323055], {
    hintContent: 'GllacyShop'
  }, {
    // Опции.
    // Необходимо указать данный тип макета.
    iconLayout: 'default#image',
    // Своё изображение иконки метки.
    iconImageHref: './img/pin-with-shadow.svg',
    // Размеры метки.
    iconImageSize: [218, 142],
    // Смещение левого верхнего угла иконки относительно
    // её "ножки" (точки привязки).
    iconImageOffset: [-38, -140]
  })

  // Отключение зумма скроллом
  // myMap.behaviors.disable('scrollZoom')
  myMap.geoObjects.add(myPlacemark)
})
