const express = require('express')
const koder = require('../usecases/koder')
const router = express.Router()

router.get('/', async (request, response) => {
  try { 
  const koders = await koder.getAll()
  response.json({
    success: true,
    message: 'all koders',
    data: {
      koders
    }
  })
  } catch(error) {
    response.status(400)
    response.json({
      success: false,
      message: error.message
      
    })
  }
})

module.exports = router