import express from 'express'

const router = express.Router()

router.get('/', (req, res) => {
  res.send('REST Api online!')
})

export default router
