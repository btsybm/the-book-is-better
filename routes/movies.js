import { Router } from 'express'
const router = Router()
import * as moviesCtrl from '../controllers/movies.js'

export {
  router
}


// GET localhost:3000/movies/new
router.get('/new', moviesCtrl.new)