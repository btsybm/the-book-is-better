import { Review } from '../models/review.js'
import { Movie } from '../models/movie.js'

export {
  create,
  deleteReview as delete,
  update
}

function update(req, res) {
  console.log("banana");
  Review.findByIdAndUpdate(req.params.id, req.body)
  .then(()=> {
      res.redirect(`/movies`)
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