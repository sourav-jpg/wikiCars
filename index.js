const express = require('express');
const dotenv = require('dotenv');
const bodyParser = require('body-parser');
const app = express();
const connectDb = require('./server/database/connection');


dotenv.config({path:'config.env'})
const PORT = process.env.PORT||8080;

connectDb();

app.use(express.urlencoded({ extended: true })); 
app.use(express.json());


app.use(bodyParser.urlencoded({extended:true}));
app.use('/auth',require('./server/routes/authRoute'));
app.use('/api',require('./server/routes/routes'));

app.listen(PORT, ()=>console.log(`Server is running on ${PORT}`));

