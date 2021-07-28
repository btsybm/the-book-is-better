import { Review } from '../models/review.js'
import { Movie } from '../models/movie.js'

export {
  create,
  deleteReview as delete,
  update
}

function update(req, res) {
  console.log("banana");
  Movie.findById(req.params.id)
  .populate('preferred')
  .then(movie => {
    movie.preferred.comments = req.body.comments
    console.log(movie.preferred, "stringstring");
    movie.save()
    .then(()=> {
      res.redirect(`/movies/${movie._id}`)
    })
  })
  .catch(err => {
    console.log(err)
  })
}



function create(req, res) {
  req.body.addedBy = req.user.profile._id
  req.body.movie = req.params.id
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const review = new Review(req.body)
  review.save()
  console.log(review)
  Movie.findById(req.params.id, function(err, movie) {
    if (!err) {
      console.log("WHYYYY", movie);
      movie.preferred = review._id
      movie.save()
      res.redirect('/')
    } else {
      console.log(err)
      res.redirect(`/movies/${movie._id}`)
    }
  })
}



function deleteReview(req, res) {
  Review.findById(req.params.id, function(err, review) {
    res.redirect('/movies')
  })
}