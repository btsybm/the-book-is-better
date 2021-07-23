import { Book } from '../models/book.js'

export {
  newBook as new
}

function newBook(req, res) {
  res.render('books/new', {
    title: 'Add Book',
  })
}
