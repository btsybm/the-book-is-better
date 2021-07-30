import { Router } from 'express'
const router = Router()
import * as authorsCtrl from '../controllers/authors.js'

export {
  router
}

router.get('/new', isLoggedIn, authorsCtrl.new);
router.get('/', isLoggedIn, authorsCtrl.index)
router.get('/:id', isLoggedIn, authorsCtrl.show)
router.post('/', isLoggedIn, authorsCtrl.create); 

function isLoggedIn(req, res, next) {
  if (req.isAuthenticated()) return next();
  res.redirect("/auth/google");
}