// Modules
const path = require('path')
const express = require("express")
const app = express()
const SocketIO = require("socket.io")


// Settings PORT
app.set('port', process.env.PORT || 8080)

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Start server
const server = app.listen(app.get('port'), () => {
    console.log('Server run port ', app.get('port'))
})

// Config SocketIO
const io = SocketIO(server)

// Websockets
io.on('connection', socket => {
    console.log("New conection", socket.id)

    socket.on('chat:message', data => {
        io.sockets.emit('chat:message', data)
    })

    socket.on('chat:typing', data => {
        //console.log(data)
        socket.broadcast.emit('chat:typing', data)
    })
})
