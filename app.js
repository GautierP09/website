let express  = require('express');
let app = express();
let bodyParser = require('body-parser');
const index = require('./index.html');

app.use(bodyParser.json());

app.get('/', function(req, res) {
	res.send(index)
})

app.listen(process.env.PORT, function(){
	console.log("Server started on port: 3000")
})
