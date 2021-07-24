import { Movie} from '../models/movie.js'

export {
  newMovie as new
}

function newMovie(req, res) {
  res.render('movies/new', {
    title: 'Add Movie or TV Show',
  })
}
