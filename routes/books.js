import { Router } from 'express'
const router = Router()
import * as booksCtrl from '../controllers/books.js'

export {
  router
}

// GET localhost:3000/books/new
router.get('/new', booksCtrl.new);

// POST localhost:3000/books
router.post('/', booksCtrl.create); 

// GET localhost:3000/movies
router.get('/', booksCtrl.index)



