const express = require('express');
const path = require('path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req,res) => {
    res.render('admin/dashboard');

});

app.listen(3000, function() {
    console.log('running...');
});