window.onload = function () {
    var div1 = document.getElementsByTagName("div")[0];
    var images = document.images;
    var str = '';

    for (var i = 0; i < images.length; i++) {
        str += "Ccылка на картинки " + (i + 1) + ': ' + images[i].src + "<br>";
        timeout(images[i], i);
    }
    function timeout(obj, i) {
        setTimeout(function () {
            obj.style.border = "solid 1px blue";
        }, (i + 1) * 1000)
    }
    div1.innerHTML = str;
}
