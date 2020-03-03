window.onload = function() {

    var draw = false;
    var c;
    var ctx;
    var input = document.getElementById('in');
    var form = document.getElementById('myform');
    var par = document.getElementById('mydiv');
    var hidden = document.getElementById('hide');
    var can = document.getElementById('can');
    // var closeBtn = document.getElementById('but');





    //var socket = new WebSocket('ws://echo.websocket.org');
    var socket = new WebSocket(' ws://t2k.azurewebsites.net/painter.ashx?appid=Exalt');

    socket.addEventListener('open', function(event) {
        // socket.send('Hello');
    });

    socket.addEventListener('message', function(event) {
        console.log('message from server', event.data);
    });


    socket.onerror = function(error) {
        console.log('WebSocket Error: ' + error);
    };

    socket.onopen = function(event) {
        console.log("WebSocket is open now.");
    };



    form.onsubmit = function(e) {
        e.preventDefault();
        var message = input.value;
        console.log('before');
        socket.send(message);
        console.log('after');
        input.value = '';
        //  window.open('canv.html');
        return false;
    };


    socket.onmessage = (event) => {
        var m = event.data;
        console.log('hay' + m);
        par.innerHTML += '<p id="par">Hello  ' + m + '</p>';
        hidden.innerHTML = '';
        can.innerHTML += '<canvas id="myCanvas" height="300" ; width="350" ; style="border: solid 1px rgb(112, 110, 110);" >canvas</canvas>';

    };


    c = this.document.getElementById("myCanvas");


};


/*ctx = c.getContext("2d");

c.onmousedown = function() {
    draw = true;
}


c.onmousemove = function(e) {
    if (draw) {
        var x = e.offsetX;
        var y = e.offsetY;
        drawing(x, y);
    }
}

c.onmouseup = function() {
    draw = false;
}

c.onmouseout = function() {
    draw = false;
}


drawing = function(x, y) {
    console.log(draw);
    // ctx.beginPath();
    //ctx.arc(x, y, 10, 0, 2 * Math.PI);
    // ctx.fillStyle = "black";
    // ctx.fill();
}

*/

//const socket = new WebSocket('ws://echo.websocket.org');s