var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var articles = {}
var cheeses = {
  gouda: {
    name: 'gouda',
    url: '/cheese.gouda'
  },
  feta: {
    name: 'feta',
    url: '/cheese.feta'
  },
  cheddar: {
    name: 'cheddar',
    url: '/cheese.cheddar'
  }
}

function createArticle (article) {
  var id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}

function createCheese (cheese) {
  var id = Object.keys(cheeses).length
  cheeses.createdAt = new Date()
  cheeses[id] = cheese.feta
  cheeses[id] = cheese.gouda
  cheeses[id] = cheese.cheddar
}

createCheese({
  title: 'Test',
  content: 'more testing'
})

createCheese({
  title: 'Cheddar Cheese is tasty, very tasty. One of the better things to come out of Britain, even former colonial subjects agree.',
  content: 'Om Nom Nom Nom Nom Cheddar, unlike most foods from Britain, Cheddar is actually good.'
})

createCheese({
  title: 'Feta Cheese one of the finest kinds of cheese to ever exist? Controversy over question causes mass protests in Greece!',
  news: 'Rioting in Greece continues for the third consecutive day as Greeks everywhere are outraged over the rumor that Feta cheese was insulted by French Cheesemakers.'
})

createCheese({
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

app.get('/cheese', function (request, response) {
  response.render('pages/cheese', {
    cheeses: feta
  })
})

app.get('/cheese', function (request, response) {
  response.render('pages/cheese', {
    cheeses: gouda
  })
})

app.get('/cheese', function (request, response) {
  response.render('pages/cheese', {
    cheeses: cheddar
  })
})

app.listen(port)
