window.onload = function() {

    var par = this.document.getElementById('mydiv');
    // var socket = new WebSocket('ws://t2k.azurewebsites.net/painter.ashx?appid=Exalt');

    this.socket.onopen = function(event) {
        console.log("WebSocket is open now." + event.data);
    };

};