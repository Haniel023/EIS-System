const express = require('express')
const connectDB = require('./config/db');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config({path: './config/config.env'})

connectDB ();

const app = express();
app.use(express.json());
app.use(cors());

const auth = require('./routes/auth.route');

app.use('/api/auth', auth)
app.use('/Integration', require('./api/index'))

app.get('/', (req, res) => {
    res.send('Hello')
})

const PORT = 8080;

app.listen(PORT, () =>{
    console.log(`App is running in port ${PORT}`)
})