import express from 'express'
import controllerOrder from '../modules/Order/controller/index.js'
import { veryfiletoken } from '../middlewares/authorization.js'

const router = express.Router()
router.use(veryfiletoken)
router.post('/add', controllerOrder.addOrders)
router.put('/edit/:id', controllerOrder.updateOders)
router.get('/', controllerOrder.getAllOrder)
router.get('/orderadmin', controllerOrder.getAllOrderAdmin)
router.delete('/:id', controllerOrder.deleteUser)
export default router