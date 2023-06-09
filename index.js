const express = require('express');
const app = express()
const port = process.env.PORT || 5000;
const cors = require('cors');

const categories = require('./data/Categories.json');
const news = require('./data/News.json');

app.use(cors())

app.get('/', (req, res) => {
    res.send('news coming')
});

app.get('/categories', (req, res) => {
    res.send(categories)
})
app.get('/news', (req, res) => {
    res.send(news)
})
app.get('/news/:id', (req, res) => {
    const id = req.params.id;
    const selectedNews = news.find(n => n._id === id);
    res.send(selectedNews)
})
app.get('/categories/:id', (req, res) => {
    const id = req.params.id;
    if (id == 0) {
        res.send(news)
    }
    else {
        const categoryNews = news.filter(n => n.category_id === id);
        res.send(categoryNews)
    }
})


app.listen(port, () => {
    console.log(`news is coming on port:${port}`)
})