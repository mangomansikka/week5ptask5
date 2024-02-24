require('dotenv').config()
const connectDB = require('./config/db');
const express = require('express')
const cors = require('cors')
const tourRoutes = require('./routes/tourRoutes')
const serviceRoutes = require('./routes/serviceRoutes')

// express app
const app = express()

// middleware
app.use(cors())
app.use(express.json())


const port=process.env.PORT || 3000;
connectDB();

// routes
app.get('/', (req, res) => res.send('API Running!'));

app.use(tourRoutes());
app.use(serviceRoutes());

app.listen(port, () => console.log(`Server started on port ${port}`));