import { Movie} from '../models/movie.js'
import { Book } from '../models/book.js'
import { Author } from '../models/author.js'
import { response } from 'express'


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
  Movie.findById(req.params.id)
  .populate("preferred")
  .then(movie => {
    console.log("testtest", movie.preferred);
    res.render('movies/show', {
      title: 'Movie Details',
      movie: movie
    })
  })
}



function search(req, res) {
  console.log(req.body.search)
  if (req.body.searchParam === "movies") {
    Movie.find({ title: req.body.search })
      .then(movies => {
        // console.log(movies)
        res.render("movies/search", { title: "Movie Search Results", movies: movies, user: req.user ? req.user : null })
      })
      .catch(err => {
        console.log(err)
        res.render("error", { title: "Error", user: req.user ? req.user : null })
      })
  } else if (req.body.searchParam === "books") {
    Book.find({ title: req.body.search })
      .then(books => {
        res.render("books/search", { title: 'Book Search Results', books: books, user: req.user ? req.user : null })
      })
      .catch(err => {
        console.log(err)
        res.render("error", { title: 'Error', user: req.user ? req.user : null })
      })
  } else (req.body.searchParam === "authors")
  Author.find({ name: req.body.search })
    .then(authors => {
      res.render("authors/search", { title: 'Author Search Results', authors: authors, user: req.user ? req.user : null })
    })
    .catch(err => {
      console.log(err)
      res.render("error", { title: "Error", user: req.user ? req.user : null })
    })
}


