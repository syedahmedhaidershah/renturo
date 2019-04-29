const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const cors = require('cors');
const mysql = require('mysql');
const fs = require('fs');
const port = 9899;

const router = require('express').Router();

app.use(bodyParser.json({}));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use('/', router);

var conn = mysql.createConnection({
  host     : 'localhost',
  user     : 'haider',
  password : 'Ahmed1234.!',
  database : 'renturo'
});

fs.readdir('./routes', (err, files) => {
	files.forEach(f => {
		require('./routes/'.concat(f))(router, conn);
	});
});
app.get('*', (req, res) => {
	res.send({error: false, message: 404});
});
app.post('*', (req, res) => {
	res.send({error: false, message: 404});
});
router.get('*', (req, res) => {
	res.send({error: false, message: 404});
});
router.post('*', (req, res) => {
	res.send({error: false, message: 404});
});

app.listen(port, () => console.log(`API is live on ${port}`));