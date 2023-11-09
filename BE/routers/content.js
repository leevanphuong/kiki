import express from "express";
import contentController from "../modules/Content/Controller/index.js";
const router = express.Router()
router.get('/', contentController.getAllContents)
router.delete('/:id', contentController.deleteContents)
router.post('/add', contentController.addContents)
router.put('/edit/:id', contentController.updateContents)
export default router