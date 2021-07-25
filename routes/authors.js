import { Router } from 'express'
const router = Router()
import * as authorsCtrl from '../controllers/authors.js'

export {
  router
}

// GET localhost:3000/authors/new
router.get('/new', authorsCtrl.new);

// GET localhost:3000/author
router.get('/', authorsCtrl.index)

// GET localhost:3000/authors/:id
router.get('/:id', authorsCtrl.show)

// POST localhost:3000/authors
router.post('/', authorsCtrl.create); 