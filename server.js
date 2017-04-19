var express = require('express')
var app = express()
var port = process.env.PORT || 8080
var articles = {}
var cheeses = {}

function createArticle (article) {
  var id = Object.keys(articles).length
  article.createdAt = new Date()
  articles[id] = article
}

function createCheese (cheese) {
  var id = Object.keys(cheeses).length
  cheese.createdAt = new Date()
  cheeses[id] = cheese
}

createCheese({
  name: 'cheddar',
  url: '/cheese/cheddar',
  image: '/images/ched.jpg',
  link: 'https://www.google.com/search?q=gouda+cheese&source=lnms&tbm=isch&sa=X&ved=0ahUKEwiMpPOhiK_TAhVI2IMKHT0jDa4Q_AUICCgB&biw=1500&bih=821',
  title: 'Cheddar Cheese is tasty, very tasty. One of the better things to come out of Britain, even former colonial subjects agree.',
  content: 'Om Nom Nom Nom Nom Cheddar, unlike most foods from Britain, Cheddar is actually good.'
})

createCheese({
  name: 'feta',
  url: '/cheese/feta',
  image: '/images/feta.jpg',
  link: 'https://www.google.com/search?biw=1500&bih=821&tbm=isch&sa=1&q=feta+cheese&oq=feta+cheese&gs_l=img.3..0i67k1j0l9.299641.302926.0.302992.21.11.5.4.5.0.173.1071.7j4.11.0....0...1c.1.64.img..1.20.1144...0i10k1j0i24k1j0i10i24k1.Rb4oFbOQxY8',
  title: 'Feta Cheese one of the finest kinds of cheese to ever exist? Controversy over question causes mass protests in Greece!',
  content: 'Rioting in Greece continues for the third consecutive day as Greeks everywhere are outraged over the rumor that Feta cheese was insulted by French Cheesemakers.'
})

createCheese({
  name: 'gouda',
  url: '/cheese/gouda',
  image: '/images/gouda.jpg',
  link: 'https://www.google.com/search?biw=1500&bih=821&tbm=isch&sa=1&q=cheddar+cheese&oq=cheddar+cheese&gs_l=img.3..0i67k1j0j0i67k1j0l7.10551.12135.0.12212.14.10.0.4.4.0.143.877.5j4.9.0....0...1c.1.64.img..1.13.912.QA57MyrDe0s',
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
    cheeses: cheeses
  })
})

app.get(cheeses[1].url, function (request, response) {
  response.render('pages/cheese', {
    cheese: cheeses[1],
    cheeses: cheeses
  })
})

app.get(cheeses[0].url, function (request, response) {
  response.render('pages/cheese', {
    cheese: cheeses[0],
    cheeses: cheeses
  })
})

app.get(cheeses[2].url, function (request, response) {
  response.render('pages/cheese', {
    cheese: cheeses[2],
    cheeses: cheeses
  })
})

app.listen(port)
