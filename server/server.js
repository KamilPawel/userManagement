const mongoose = require('mongoose');
const express = require('express');
const app = express();
const users = require('./routes/users');

const PORT = 4000;

mongoose.connect(`mongodb://localhost:27017/userManagment`)
    .then(() => console.log('Connected to mongoDB'))
    .catch(err =>  console.error(error))



app.use(express.json());
app.use('/api/users', users);

app.get('/', (req, res) => {
    res.send('<h1>This is the backend service</h1>');
})


app.listen(PORT, () => {
    console.log(`Listening @ port: ${PORT}`);
})
