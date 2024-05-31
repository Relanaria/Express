const exphbs = require('express-handlebars');

function configHbs(app) {
    const handlebars = exphbs.create({ extname: '.hbs'})
    app.engine('.hbs', handlebars.engine);
    app.set('view engine', '.hbs');
};


module.exports = { configHbs};