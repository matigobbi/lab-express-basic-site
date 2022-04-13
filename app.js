const express = require('express')
const app = express()
const port = 3000

// this registers the public folder so that it get's sent 
// to the client with the response
app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
	console.log('home route')
	// this gives us the full path of the directory
	res.sendFile(__dirname + '/views/index.html')
})

app.get('/about', function (req, res) {
	console.log('this is the about route')
	res.sendFile(__dirname + '/views/about.html')
})

app.get('/gallery', function (req, res) {
	console.log('this is the about route')
	res.sendFile(__dirname + '/views/gallery.html')
})

app.listen(port, () => {
	console.log(`Listening to port ${port}`)
})