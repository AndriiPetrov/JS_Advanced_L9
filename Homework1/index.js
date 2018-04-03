// var div = document.getElementsByTagName("div")[0];
// var img = document.getElementsByTagName("img")[0];

window.onload = function(e){
    e.target.addEventListener("click", function(e){
        var img = document.img;
        if(e.target.value === "button1"){
            img.src = "img/html.jpg";
        }
        if(e.target.value === "button2"){
            img.src = "img/css.jpg";
        }
        if(e.target.value === "button3"){
            img.src = "img/js.png";
        }
    })
}