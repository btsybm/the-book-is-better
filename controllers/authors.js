import { Author } from '../models/author.js'
import { Book } from '../models/book.js'
import { Movie } from '../models/movie.js'

export {
  newAuthor as new,
  create,
  index,
  show,
}

function newAuthor(req, res) {
  res.render('authors/new', {
    title: "Add Author"
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const author = new Author(req.body)
  author.save()
    .then(result => res.redirect('/books/new'))
    .catch(err => {
      console.log(err)
      res.redirect('/authors/new')
    })
}

function index(req, res) {
  Author.find({}, function(err, authors) {
    res.render('authors/index', {
      authors: authors,
      title: 'All Authors'
    })
  })
}

function show(req, res) {
  Author.findById(req.params.id, function (err, author) {
    res.render('authors/show', {
      title: 'Author Details',
      author: author
    })
  })
}


