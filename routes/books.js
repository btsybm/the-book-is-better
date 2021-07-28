import { Router } from 'express'
const router = Router()
import * as booksCtrl from '../controllers/books.js'

export {
  router
}

// GET localhost:3000/books/new
router.get('/new', isLoggedIn, booksCtrl.new);

// GET localhost:3000/books
router.get('/', isLoggedIn, booksCtrl.index)

// GET localhost:3000/books/:id
router.get('/:id', isLoggedIn, booksCtrl.show)

// POST localhost:3000/books
router.post('/', isLoggedIn, booksCtrl.create); 

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}