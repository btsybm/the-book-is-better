import { Review } from '../models/review.js'
import { Movie } from '../models/movie.js'

export {
  create,
  edit,
  deleteReview as delete,
}



function create(req, res) {
  req.body.addedBy = req.user.profile._id
  req.body.movie = req.params.id
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const review = new Review(req.body)
  review.save()
  Movie.findById(req.params.id, function(err, movie) {
    if (!err) {
      console.log("This is the movie", movie);
      movie.preferred.push(review)
      movie.save()
      res.redirect('/')
    } else {
      console.log(err)
      res.redirect(`/movies/${movie._id}`)
    }

  })
}

function edit(req, res) {
  Review.findById(req.params.id, function(err, review) {

  })
}


function deleteReview(req, res) {
  Review.findById(req.params.id, function(err, review) {

  })
}