var app = require('express')();
var path = require('path');
var express = require('express');
var server = require('http').createServer(app);
var io = require('socket.io')(server);

io.on('connection', function(socket){
  console.log("set connection!")
  socket.on('event', function(data){
  	console.log(data)
  	io.emit("app", "Hello")
  });

  socket.on('acc', function(accx, axxy, axxz){
  	console.log(accx, axxy, axxz)
  	io.emit("acc", accx, axxy, axxz)
  });

  socket.on('gyro', function(gyrox, gyroy, gyroz){
  	console.log(gyrox, gyroy, gyroz)
  	io.emit("gyro", gyrox, gyroy, gyroz)
  });

  socket.on('mag', function(magx, magy, magz){
  	console.log(magx, magy, magz)
  	io.emit("mag", magx, magy, magz)
  });

  socket.on('rotation', function(magx, magy, magz){
    console.log(magx, magy, magz)
    io.emit("rotation", magx, magy, magz)
  });

  socket.on('touchY', function(mouseY, height){
    io.emit("touchY", mouseY, height)
  });

  socket.on('moveEnd', function(midX, midY){
    io.emit("moveEnd", midX, midY)
  });

  socket.on('moveStart', function(midX, midY){
    io.emit("moveStart", midX, midY)
  });

  socket.on('touchX', function(mouseX, width){
    io.emit("touchX", mouseX, width)
  });
  socket.on('confirm', function(confirm){
    io.emit("confirm", confirm)
  });
  socket.on('task', function(task){
    io.emit("task", task)
  });

});

app.use('/', express.static(path.join(__dirname, 'public')));

app.get('/3d-rotate', function(req, res){
  res.sendFile(__dirname + '/3d-rotate.html');
});

app.get('/3d-zoom', function(req, res){
  res.sendFile(__dirname + '/3d-zoom.html');
});

app.get('/2d-point', function(req, res){
  res.sendFile(__dirname + '/2d-point.html');
});

app.get('/2d-move', function(req, res){
  res.sendFile(__dirname + '/2d-move.html');
});

app.get('/scroll', function(req, res){
  res.sendFile(__dirname + '/scroll.html');
});

app.get('/task', function(req, res){
  res.sendFile(__dirname + '/task.html');
});

app.get('/controller', function(req, res){
  res.sendFile(__dirname + '/controller.html');
});

server.listen(3030, function(){
	console.log("listening server!")
});