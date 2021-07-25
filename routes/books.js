import { Router } from 'express'
const router = Router()
import * as booksCtrl from '../controllers/books.js'

export {
  router
}

// GET localhost:3000/books/new
router.get('/new', booksCtrl.new);

// GET localhost:3000/books
router.get('/', booksCtrl.index)

// GET localhost:3000/books/:id
router.get('/:id', booksCtrl.show)

// POST localhost:3000/books
router.post('/', booksCtrl.create); 