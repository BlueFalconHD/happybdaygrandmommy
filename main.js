var opacity4 = 0;

function MyFadeFunction4() {


    if (opacity4 < 1) {
        opacity4 += .1;
        setTimeout(function() { MyFadeFunction4() }, 100);
    }
    document.getElementById('text4').style.opacity = opacity4;
}


var opacity3 = 0;

function MyFadeFunction3() {


    if (opacity3 < 1) {
        opacity3 += .1;
        setTimeout(function() { MyFadeFunction3() }, 100);
    }
    document.getElementById('text3').style.opacity = opacity3;
}

var opacity2 = 0;

function MyFadeFunction2() {


    if (opacity2 < 1) {
        opacity2 += .1;
        setTimeout(function() { MyFadeFunction2() }, 100);
    }
    document.getElementById('text2').style.opacity = opacity2;

}


var opacity = 0;

function MyFadeFunction() {

    if (opacity < 1) {
        opacity += .1;
        setTimeout(function() { MyFadeFunction() }, 100);
    }
    document.getElementById('text').style.opacity = opacity;


}


function gifTime() {
    let box = document.getElementById('box')

    box.src = "https://i.postimg.cc/SxkvLdpJ/openingbox.gif"

    window.setTimeout(function() {
        MyFadeFunction()
    }, 700);

    window.setTimeout(function() {
        MyFadeFunction2()
    }, 700);

    window.setTimeout(function() {
        MyFadeFunction3()
    }, 700);

    window.setTimeout(function() {
        MyFadeFunction4()
    }, 700);
}