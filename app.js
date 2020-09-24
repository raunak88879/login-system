const express = require('express');
const path = require('path');

const port = 8000 ;
const app = express();

/********    EXPRESS SPECIFIC STUFF ********/

app.use('/static',express.static('static'));

/********    PUG SPECIFIC STUFF     ********/

app.set('view engine', 'pug');

app.set('views', path.join(__dirname, 'views')) ;


/********    ENDPOINTS    ********/

app.get('/',(req, res) => {
	res.render('signup.pug');
});





/*******    STARTING THE SERVER *********/

app.listen(port, () => {
	console.log(`The application started successfully on port ${port}`) ;
});