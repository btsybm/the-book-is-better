import { Review } from '../models/review.js'
import { Movie } from '../models/movie.js'

export {
  create,
  deleteReview as delete,
  update,
  totalReviews
}


function totalReviews (req, res) {


  
}









function update(req, res) {
  Review.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(req.headers.referer)
    })
    .catch(err => {
      console.log(err)
    })
}


function deleteReview(req, res) {
  console.log("are we deleting");
  Review.findByIdAndDelete(req.params.id, req.body)
    .then(() => {
      res.redirect(req.headers.referer)
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
  Movie.findById(req.params.id, function (err, movie) {
    if (!err) {
      movie.preferred = review._id
      movie.save()
      res.redirect(`/movies/${movie._id}`)

    } else {
      console.log(err)
      res.redirect(`/movies/${movie._id}`)
    }
  })
}





