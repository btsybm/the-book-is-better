import { Book } from '../models/book.js'
import { Author } from '../models/author.js'
import { Movie } from '../models/movie.js'



export {
  newBook as new,
  create,
  index,
}


function index(req, res) {
  Book.find({}, function(err, books) {
    res.render('books/index', {
      books: books,
      title: 'All Books'
    })
  })
}


function newBook(req, res) {
  res.render('books/new', {
    title: 'Add Book',
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const book = new Book(req.body)
  book.save()
    .then(result => res.redirect('/'))
    .catch(err => {
      console.log(err)
      res.redirect('/books/new')
    })
}