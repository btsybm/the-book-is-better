import { Author } from '../models/author.js'
import { Book } from '../models/book.js'
import { Movie } from '../models/movie.js'



export {
  newAuthor as new,

}

function newAuthor(req, res) {
  res.render('authors/new', {
    title: "Add Author"
  })
}