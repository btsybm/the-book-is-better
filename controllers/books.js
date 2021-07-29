import { Book } from '../models/book.js'
import { Author } from '../models/author.js'
import { Movie } from '../models/movie.js'



export {
  newBook as new,
  create,
  index,
  show,
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
    .then(result => res.redirect('/books'))
    .catch(err => {
      console.log(err)
      res.redirect('/books/new')
    })
}



function show(req, res) {
  Book.findById(req.params.id)
  .then(book => {
    Movie.find({sourceMaterial: book._id})
    .then(movies => {
      res.render('books/show', {
        title: 'Book Details',
        book: book,
        movies: movies,
      })
    })
  })
}