window.onload = function () {

    var d = false;
    var c;
    var ctx;
    var input = document.getElementById('in');
    var form = document.getElementById('myform');
    var par = document.getElementById('mydiv');
    var hidden = document.getElementById('hide');
    var can = document.getElementById('can');
    var messagesList;


    // var socket = new WebSocket('ws://echo.websocket.org');
    var socket = new WebSocket('wss://echo.websocket.org');
    //socket = new WebSocket('wss://t2k.azurewebsites.net/painter.ashx?appid=Exalt');

    socket.addEventListener('open', function (event) {
        //socket.send('Hello');
    });

    socket.addEventListener('message', function (event) {
        console.log('message from server', event.data);
    });


    socket.onerror = function (error) {
        console.log('WebSocket Error: ' + error);
    };

    socket.onopen = function (event) {
        console.log("WebSocket is open now.");
        //console.log(event.data);
    };



    form.onsubmit = function (e) {
        e.preventDefault();
        var message = input.value;
        socket.send(message);
        input.value = '';
        return false;
    };


    socket.onmessage = (event) => {
        var m = event.data;
        /*
                par.innerHTML += '<p id="par">Hello  ' + m + '</p>';
                can.innerHTML += '<canvas id="myCanvas" height="300" ; width="350" ; style="border: solid 1px rgb(112, 110, 110); float=left;" >canvas' +
        
                    '</canvas>';
        
                hidden.insertAdjacentHTML('beforebegin', '<div id="mlist" style="float=left;"><p id="peers">Peers</p><ul id="messages"></ul> </div>');
                form.style.visibility = 'hidden';
        
                messagesList = document.getElementById('messages');
                var l = document.getElementById('mlist');
                l.innerHTML += '<div id="add" style="text-align:center; font:1.5em sans-serif; border-style: dotted;padding:5px;border-color:rgb(232, 240, 240) ; background-color:rgb(143, 146, 146);box-shadow:rgb(232, 240, 240) ; margin-left:10px;margin-right:10px;">' + m + '</div>';
        
        
            */

       var z1=document.getElementById('hide');
       var z2=document.getElementById('ShownDiv');
       var z3=document.getElementById('header');
       z1.style.display="none";
       z2.style.display="block";
       z3.innerHTML+=" " +m;
      draw_draw(d);
    };


};

var prevX = 0, currX = 0, prevY = 0, currY = 0;
var flag = false;
var co = "#000000";
var size = 1;

function color(obj) {
    switch (obj.id) {
        case "red":
            co = '#ff0000';
            break;
        case "red1":
            co = '#ff4000';
            break;
        case "orange1":
            co = "#ff8000";
            break;
        case "orange2":
            co = "#ffc000";
            break;
        case "orange3":
            co = "#ffff00";
            break;
        case "green1":
            co = "#00ff00";
            break;
        case "green2":
            co = "#40ff00";
            break;
        case "green3":
            co = "#80ff00";
            break;
        case "green4":
            co = "#c0ff00";
            break;
        case "blue1":
            co = "#0000ff";
            break;
        case "blue2":
            co = "#0040ff";
            break;
        case "blue3":
            co = "#0080ff";
            break;
        case "blue4":
            co = "#00c0ff";
            break;
        case "blue5":
            co = "#00ffff";
            break;
        case "pink1":
            co = "#8000ff";
            break;
        case "pink2":
            co = "#bf40ff";
            break;
        case "pink3":
            co = "#ff00ff";
            break;
        case "pink4":
            co = "#c0c0c0";
            break;
        case "pink5":
            co = "#808080";
            break;
        case "black":
            co = "#000000";
            break;
    }
}

draw_draw = function (d) {

    c = this.document.getElementById("canvas");
    ctx = c.getContext('2d');
    c.addEventListener('mousedown', function (event) {

    });
    c.addEventListener('mousemove', function (event) {

    });
    c.addEventListener('mouseup', function (event) {

    });
    c.addEventListener('mouseout', function (event) {

    });

    c.onmousemove = function (event) {
        if (d) {
            //  var x = event.offsetX;
            //  var y = event.offsetY;
            prevX = currX;
            prevY = currY;
            currX = event.clientX - canvas.offsetLeft;
            currY = event.clientY - canvas.offsetTop;
            // draw();
            drawing();

        }
    }

    c.onmouseout = function () {
        d = false;
        console.log(d);
    }

    c.onmouseup = function () {
        d = false;
        console.log(d);
    }

    c.onmousedown = function (e) {
        d = true;
        console.log(d);
        prevX = currX;
        prevY = currY;
        currX = e.clientX - canvas.offsetLeft;
        currY = e.clientY - canvas.offsetTop;
        flag = true;
        if (flag) {
            ctx.beginPath();
            ctx.fillStyle = co;
            ctx.fillRect(currX, currY, 2, 2);
            ctx.closePath();
            flag = false;
        }
    }

    c.onmessage = (event) => {
        ///console.log(event.x);
        //console.log(event.y);
    }



    drawing = function () {
        ctx.beginPath();
        ctx.lineWidth = size;
        ctx.moveTo(prevX, prevY);
        ctx.lineTo(currX, currY);
        ctx.strokeStyle = co;
        ctx.stroke();
        ctx.closePath();
    }
};