
const io = require('socket.io')(process.env.PORT);
const users =  {}

io.on('connection',socket =>{
     console.log('New User')
     socket.on('send-username',nameofuser =>{
         users[socket.id] = nameofuser;
         socket.broadcast.emit('user-connected',nameofuser)
     })
      socket.on('send-chat-message',datamessage => {
        
              socket.broadcast.emit('chat-message',{datamessage:datamessage.message,name1:datamessage.nameofme});
       
    })

    // socket.on('disconnect',()=>{
    //    socket.broadcast.emit('user-disconnected',users[socket.id])
    //    delete users[socket.id];

    // })
})

