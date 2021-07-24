import { Router } from 'express'
const router = Router()
import * as booksCtrl from '../controllers/books.js'

export {
  router
}

// GET localhost:3000/books/new
router.get('/new', booksCtrl.new)



