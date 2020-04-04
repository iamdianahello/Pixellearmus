window.onload = function () {

    var screenWidth = window.innerWidth;
    var screenHeight = window.innerHeight;

//количество ячеек 150 на 50.
//чтобы получить длину поля (не точные координаты, а длину):
//умножаем длину экрана на 0.95,
//делим полученное на 150 и отбрасываем остаток к хуям
//ага, это длина и ширина одной ячейки
    var onePiece = Math.trunc(screenWidth * 0.95 / 150);
    var fieldWidth = onePiece * 150;
    var fieldHeight = onePiece * 50;


    var field = document.getElementById("field"),
        context = field.getContext('2d');
    field.width = screenWidth;
    field.height = screenHeight;

//вычисляем длину пустого пространства, она же левая координата поля.
//а высота пустого пространства - верхняя координата
//из длины экрана вычли длину поля, остаток делим на 2. В нашем случае это (1920-80)/2 = 60, с шириной аналогично
    var leftPointField = Math.trunc((screenWidth - fieldWidth) / 2); //это я заранее подумала о поведении при зуме, число может быть нечетным, надо на всякий сбросить остаток. Но вообще такая завязка на координаты выглядит херовато.
    var topPointField = Math.trunc((screenHeight - fieldHeight) / 2);
    context.fillRect(leftPointField, topPointField, fieldWidth, fieldHeight);


    for (var i = leftPointField; i <= leftPointField + fieldWidth; i += onePiece) {
        context.beginPath();
        context.strokeStyle = 'red';
        context.moveTo(i, topPointField);
        context.lineTo(i, topPointField + fieldHeight);
        context.stroke();
    }

    for (var a = topPointField; a <= topPointField + fieldHeight; a += onePiece) {
        context.beginPath();
        context.strokeStyle = 'green';
        context.moveTo(leftPointField, a);
        context.lineTo(leftPointField + fieldWidth, a);
        context.stroke();
    }


    field.addEventListener(
        'click',
        function (position) {
            definePiecePosition(position.clientX, position.clientY);
        },
        false);


    function definePiecePosition(xScreen, yScreen) {
        var xField = Math.trunc((xScreen - leftPointField) / onePiece);
        var yField = Math.trunc((yScreen - topPointField) / onePiece);

        alert(xField + ' ' + yField + ' ' + onePiece);

        if ((xField >= 0) && (xField <= 149) && (yField >= 0) && (yField <= 49)) {
            alert('all ok');
        }
    }
}