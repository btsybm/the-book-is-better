import { Review } from '../models/review.js'
import { Movie } from '../models/movie.js'


export {
  create
}


  
  function create(req, res) {
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



