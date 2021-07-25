import { Movie} from '../models/movie.js'
import { Book } from '../models/book.js'

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
    if (req.body.searchParam === "books") {
      // Book.find({ title: req.body.searchContent})
      // .then(jobs => {
      //     console.log(books)
          // res.render("jobs/search", { title: "Search Results", jobs: jobs, user: req.user ? req.user: null})
      // })
      // .catch(err => {
      //     console.log(err)
          // res.render("error", {title: "Error", user: req.user ? req.user : null})
      // })
        } else if (req.body.searchParam === "movies") {
      // Company.find({ companyName: req.body.searchContent})
      // .then(companies => {
      //     res.render("companies/search", { title: "Search Results", companies: companies, user: req.user ? req.user: null})
      // })
      // .catch(err => {
      //     console.log(err)
      //     res.render("error", {title: "Error", user: req.user ? req.user : null})
      // })
  }
}



  // Movie.find({ title: req.body.movieSearch})
  // .then(response => {
  //   res.render('movies/search', {
  //     movies: response.data
  //   })
  // })
