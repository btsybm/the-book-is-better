import { Router } from 'express'
const router = Router()
import * as authorsCtrl from '../controllers/authors.js'

export {
  router
}

// GET localhost:3000/authors/new
router.get('/new', isLoggedIn, authorsCtrl.new);

// GET localhost:3000/author
router.get('/', isLoggedIn, authorsCtrl.index)

// GET localhost:3000/authors/:id
router.get('/:id', isLoggedIn, authorsCtrl.show)

// POST localhost:3000/authors
router.post('/', isLoggedIn, authorsCtrl.create); 

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}