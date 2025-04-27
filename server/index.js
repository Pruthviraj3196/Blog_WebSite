const express = require("express");
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require("mongoose");
const authRoutes = require('./routes/authRoutes');
const blogRoutes = require('./routes/blogRoutes');

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
.then(() => console.log("Connection made with DataBase"))
.catch((err) => console.log(err));

app.use('/api', authRoutes);
app.use('/api', blogRoutes);

const PORT = process.env.PORT || 5000;

app.listen(process.env.PORT,()=> {
    console.log(`Server is connected with ${process.env.PORT}`)
})



