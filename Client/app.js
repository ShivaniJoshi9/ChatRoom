var socket = io();
var hist = []; // trying to get the message history

$('form').on('submit', function () {
    var text = $('#message').val();
    var who = $('#name').val();
    var d = new Date();
    var hour = d.getHours() - 12;
    var min = d.getMinutes();
    
    if (d.getHours() < 12) {
        if (min < 10) {
        socket.emit('message', who + ": " + text + "\t" + hour + ":0" + min + " AM");
        $('#message').val('');
        }
        else{
        socket.emit('message', who + ": " + text + "\t" + hour + ":" + min + " AM");
        $('#message').val('');
        }
    }
    else{
        if (min < 10) {
        socket.emit('message', who + ": " + text + "\t" + hour + ":0" + min + " PM");
        $('#message').val('');
        }
        else{
        socket.emit('message', who + ": " + text + "\t" + hour + ":" + min + " PM");
        $('#message').val('');
        }
    }
    return false;
});

//trying to get the name up there
socket.on('message', function (msg) {
    //hist.push(msg);
    $('<li>').text(msg).appendTo('#history');
});
