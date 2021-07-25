import { Router } from 'express'
const router = Router()
import * as authorsCtrl from '../controllers/authors.js'

export {
  router
}

// GET localhost:3000/books/new
router.get('/new', authorsCtrl.new);

// // GET localhost:3000/books
// router.get('/', authorsCtrl.index)

// // GET localhost:3000/books/:id
// router.get('/:id', authorsCtrl.show)

// // POST localhost:3000/books
// router.post('/', authorsCtrl.create); 