import { Router } from 'express'
const router = Router()
import * as moviesCtrl from '../controllers/movies.js'

export {
  router
}

router.get('/new', moviesCtrl.new)
router.get('/', moviesCtrl.index)
router.post('/', moviesCtrl.create)
router.post('/search', moviesCtrl.search)
router.get('/:id', moviesCtrl.show)


