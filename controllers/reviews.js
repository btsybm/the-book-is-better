import { Review } from '../models/review.js'
import { Movie } from '../models/movie.js'


export {
  create
}


 
// function create(req, res) {
//   // Add author/game info to req.body (for when we use model.create)
//   req.body.addedBy = req.user.profile._id
//   req.body.movie = req.params.id
//   // Create the review
//   Review.create(req.body)
//   .then(review => {
//     // Add the review reference to the Game
//     Movie.findById(req.params.id)
//     .then(movie => {
//       movie.reviews.push(review._id)
//       movie.save()
//       .then(() => {
//         res.redirect(`/movies/${movie._id}`)
//       })
//     })
//   })
// }



function create(req, res) {
  
  req.body.addedBy = req.user.profile._id
  req.body.movie = req.params.id
  
  for (let key in req.body) {
    if (req.body[key] === '') delete req.body[key]
  }
  const review = new Review(req.body)
  review.save()
    .then(result => res.redirect('/'))
    .catch(err => {
      console.log(err)
      res.redirect(`/movies/${movie._id}`)
    })
}



