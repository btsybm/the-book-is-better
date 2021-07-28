import { Router } from 'express'
const router = Router()
import * as moviesCtrl from '../controllers/movies.js'

export {
  router
}

router.get('/new', isLoggedIn, moviesCtrl.new)
router.get('/', isLoggedIn, moviesCtrl.index)
router.post('/', isLoggedIn, moviesCtrl.create)
router.post('/search', isLoggedIn, moviesCtrl.search)
router.get('/:id', isLoggedIn, moviesCtrl.show)

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}
