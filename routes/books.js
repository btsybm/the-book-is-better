import { Router } from 'express'
const router = Router()
import * as booksCtrl from '../controllers/books.js'

export {
  router
}

router.get('/new', isLoggedIn, booksCtrl.new);
router.get('/', isLoggedIn, booksCtrl.index)
router.get('/:id', isLoggedIn, booksCtrl.show)
router.post('/', isLoggedIn, booksCtrl.create); 

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}