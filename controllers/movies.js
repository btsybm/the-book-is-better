import { Movie} from '../models/movie.js'
import { Book } from '../models/book.js'
import { Author } from '../models/author.js'


export {
  newMovie as new,
  create,
  index,
  show,
  search,
}

function newMovie(req, res) {
  res.render('movies/new', {
    title: 'Add Movie or TV Show',
  })
}

function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const movie = new Movie(req.body)
  movie.save()
    .then(result => res.redirect('/'))
    .catch(err => {
      console.log(err)
      res.redirect('/movies')
    })
}

function index(req, res) {
  Movie.find({}, function(err, movies) {
    res.render('movies/index', {
      movies: movies,
      title: 'All Movies'
    })
  })
}

function show(req, res) {
  Movie.findById(req.params.id, function(err, movie) {
    res.render('movies/show', {
      title: 'Movie Details',
      movie: movie
    })
  })
}



function search(req, res) {
  Movie.find({ title: req.body.search })
  .then(movies => {
    Book.find({ title: req.body.search })
    .then(books => {
      Author.find({ name: req.body.search })
      .then(authors => {
        res.render('movies/search', {
          title: "search results",
          movies,
          books,
          authors
        })
      })
    })
  })
}

