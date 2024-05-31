const { configExpress } = require('./config/express');
const { configHbs } = require('./config/hbs');
const { router } = require('./config/routes');
const express = require('express');

const PORT = 3000;

const app = express();


configHbs(app);
configExpress(app);
app.use(router);

app.listen(PORT);

// app.get('/', (req, res) => {
//     res.render('home');
// });

// app.get('/create', (req, res) =>{
//     res.render('create');
// });
