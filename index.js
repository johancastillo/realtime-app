// Modules
const path = require('path')
const express = require("express")
const app = express()

// Settings PORT
app.set('port', process.env.PORT || 8080)

// Static files
app.use(express.static(path.join(__dirname, 'public')))

// Start server
app.listen(app.get('port'), () => {
    console.log('Server run port ', app.get('port'))
})
