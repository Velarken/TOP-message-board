// imports
const express = require('express');
const path = require('node:path');
const app = express();
const assetsPath = path.join(__dirname);
const indexRouter = require('./routers/indexRouter');

// requests
app.use(express.urlencoded({extended:true}));
app.use(express.static(assetsPath));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use('/', indexRouter)
app.use('/new', indexRouter)


// start server
const PORT = 3040;
app.listen(PORT, err => {
    if (err) {
        throw err;
    }
    console.log('Server started. Listing on port:', PORT)
})