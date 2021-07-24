import { Book } from '../models/book.js'
import { Author } from '../models/author.js'
import { Movie } from '../models/movie.js'



export {
  newBook as new
}

function newBook(req, res) {
  res.render('books/new', {
    title: 'Add Book',
  })
}
