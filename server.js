var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var articles = {}
var contents = {}
var gcheese = {}
var ched = {}

function createArticle (article) {
  var id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}

function createChed (chedd) {
  var id = Object.keys(ched).length
  chedd.createdAt = new Date()
  ched[id] = chedd
}

function createContent (content) {
  var id = Object.keys(contents).length
  content.createdAt = new Date()
  contents[id] = content
}

function createG (g) {
  var id = Object.keys(gcheese).length
  g.createdAt = new Date()
  gcheese[id] = g
}

createChed({
  title: 'Cheddar Cheese is tasty, very tasty. One of the better things to come out of Britain, even former colonial subjects agree.',
  content: 'Om Nom Nom Nom Nom Cheddar, unlike most foods from Britain, Cheddar is actually good.'
})

createContent({
  title: 'Feta Cheese one of the finest kinds of cheese to ever exist? Controversy over question causes mass protests in Greece!',
  news: 'Rioting in Greece continues for the third consecutive day as Greeks everywhere are outraged over the rumor that Feta cheese was insulted by French Cheesemakers.'
})

createG({
  title: 'Gouda Cheese described as being "good enough", Dutch satisfied with statement.',
  content: 'The Dutch are self-righteous as usual.'
})

createArticle({
  title: 'I LOVE CHEESE',
  content: 'Cheese is my everything, Cheese is my life.'
})
createArticle({
  title: 'HMMMMM CHEESE',
  content: 'CHEESEY MCCHEESE UN CHEEEEEEEEEEESE.'
})

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', function (request, response) {
  response.render('pages/index', {
    articles: articles
  })
})

app.get('/two', function (request, response) {
  response.render('pages/two', {
    contents: contents
  })
})

app.get('/Gouda', function (request, response) {
  response.render('pages/Gouda', {
    gcheese: gcheese
  })
})

app.get('/ched', function (request, response) {
  response.render('pages/ched', {
    ched: ched
  })
})

app.listen(port)
