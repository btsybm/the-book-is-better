import { Router } from 'express'
const router = Router()
import * as reviewsCtrl from '../controllers/reviews.js'

export {
  router
}

router.post('/:id', isLoggedIn, reviewsCtrl.create)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}

// edit review
router.post('/:id', isLoggedIn, reviewsCtrl.edit)


//delete review
router.delete('/:id/delete', isLoggedIn, reviewsCtrl.delete)
