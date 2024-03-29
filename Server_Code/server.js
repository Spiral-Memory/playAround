const express = require('express');
const app = express();
const server = require('http').createServer(app);
const io = require('socket.io')(server);
const cors = require('cors');

app.use(cors());

const users = {};

io.on("connection", (socket) => {
  console.log("New User");
  socket.on("send-username", (nameofuser) => {
    users[socket.id] = nameofuser;
    socket.broadcast.emit("user-connected", nameofuser);
  });
  socket.on("send-chat-message", (datamessage) => {
    socket.broadcast.emit("chat-message", {
      datamessage: datamessage.message,
      name1: datamessage.nameofme,
    });
  });
});

const port = process.env.PORT || 3000;
server.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
