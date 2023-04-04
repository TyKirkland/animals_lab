//initializing
const express = require('express');
const app = express();
const methodOverride = require('method-override');

//linking our model
const Animal = require('./models/animal');

//middleware

//submit button functionality
app.use(express.urlencoded({extended: false}));

app.use(methodOverride('_method'))

//ability to view ejs files
app.set('view engine', 'ejs');

//routes

app.post('/animals', async (req, res) => {
    req.body.extinct = req.body.extinct === 'on' ? true : false;
    const animal = await Animal.create(req.body);
    res.redirect('/animals');
})

app.get('/animals', async (req, res) => {
    //you can get all the objects by using the find method with empty {}
    const animals = await Animal.find({});
    res.render('index', {animals});
})

app.get('/animals/new', async (req, res) => {
    res.render('new');
})

app.get('/animals/:id', async (req, res) => {
    const animal = await Animal.findById(req.params.id);
    res.render('show', {animal})
})

app.get('/animals/:id/edit', async (req, res) => {
    const animal = await Animal.findById(req.params.id);
    res.render('edit', {animal})
})

app.delete('/animals/:id', async (req, res) => {
    const animal = await Animal.findByIdAndDelete(req.params.id);
    res.redirect('/animals');
})

app.put('/animals/:id', async (req, res) => {
    req.body.extinct = req.body.extinct === 'on' ? true : false;
    const animal = await Animal.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
    });
    res.redirect('/animals');
})

//fallback route
app.get('/*', (req, res) => {
    res.send('You messed up...');
})

app.listen(3000, () => {
    console.log('express is listening on port 3000');
})