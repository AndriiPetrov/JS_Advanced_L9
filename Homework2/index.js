// window.onload = function (e) {
//     e.target.AddEventListener("click", function (e) {
//         // e.target.style.width = "200px";
//         e.target.style.height = "200px";
//         // var img = document.images;
//         // for (var i = 0; i < img.length; i++) {
//         //     if(img[i].src === "img/html")
//         //     img[i].style.width = "200px";
//         //     img[i].style.height = "200px";
//         // }
//     })
// }
var countStart = 30;
var countEnd = 400;
var timer;
window.onload = function (e) {
    e.target.addEventListener('click', function (e) {
        if (countStart > countEnd) {
            timer = setInterval(function () {
                countStart = 30;
                e.target.style.height = countEnd + 'px';
                countEnd--;
                if (e.target.style.height === '30px') {
                    clearInterval(timer);
                    countEnd = 400;
                }
            }, 1)
        }
        else {
            timer = setInterval(function () {
                e.target.style.height = countStart + 'px';
                countStart++;
                if (e.target.style.height === '400px') {
                    clearInterval(timer);
                }
            }, 1)
        }
    })
}
        // function animate(target) {

        // }