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
  Book.find({}, function (err, books) {
    res.render('movies/new', {
      title: 'Add Movie or TV Show',
      books: books,
    })
  })
}



function create(req, res) {
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const movie = new Movie(req.body)
  movie.save()
    .then(result => res.redirect(`/movies/${movie._id}`))
    .catch(err => {
      console.log(err)
      res.redirect('/movies')
    })
}


function index(req, res) {
  Movie.find({})
  .populate('sourceMaterial')
  .then(movies => {
    res.render('movies/index', {
      movies: movies,
      title: 'All Movies'
    })
  })
}



function show(req, res) {
  Movie.findById(req.params.id)
  .populate('review')
  .populate({
    path: 'sourceMaterial', 
    model: 'Book',
    populate: {
      path: 'author',
      model: 'Author'
    }
  })
  .then(movie => {
    console.log(movie);
    let moviePref = movie.review.filter(review =>
      review.preferred === 'book')
    const data = {
      totalRev: movie.review.length,
      moviePref: moviePref?.length,
      bookPref: (movie.review.length) - (moviePref.length),
      moviePercentage: ((moviePref?.length / movie.review.length) * 100)
    }
    let userReview = movie.review.filter(review => review.addedBy._id.equals(req.user.profile._id))
    res.render('movies/show', {
      title: 'Movie Details',
      movie: movie,
      userReview: userReview[0],
      data: data
    })
  })
}



function search(req, res) {
  let regex = new RegExp(req.body.search)
  if (req.body.searchParam === "movies") {
    Movie.find ({title: { $regex: regex, $options: "i" }})      
    .then(movies => {
        res.render("movies/search", { title: "Movie Search Results", movies: movies, user: req.user ? req.user : null })
      })
      .catch(err => {
        console.log(err)
        res.render("error", { title: "Error", user: req.user ? req.user : null })
      })
  } else if (req.body.searchParam === "books") {
    Book.find({title: { $regex: regex, $options: "i" }}) 
      .then(books => {
        res.render("books/search", { title: 'Book Search Results', books: books, user: req.user ? req.user : null })
      })
      .catch(err => {
        console.log(err)
        res.render("error", { title: 'Error', user: req.user ? req.user : null })
      })
  } else if (req.body.searchParam === "authors")
  Author.find({name: { $regex: regex, $options: "i" }}) 
    .then(authors => {
      res.render("authors/search", { title: 'Author Search Results', authors: authors, user: req.user ? req.user : null })
    })
    .catch(err => {
      console.log(err)
      res.render("error", { title: "Error", user: req.user ? req.user : null })
    })
}


