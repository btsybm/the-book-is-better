import { Router } from 'express'
const router = Router()
import * as reviewsCtrl from '../controllers/reviews.js'

export {
  router
}

router.post('/:id', isLoggedIn, reviewsCtrl.create)
router.put('/:id', isLoggedIn, reviewsCtrl.update)
router.delete('/:id', isLoggedIn, reviewsCtrl.delete)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}



