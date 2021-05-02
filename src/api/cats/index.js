const express = require('express')
const controllerCats = require('../../controllers/cats')
const router = express.Router()

router
  .get('/', controllerCats.getAll)
  .get('/:id', controllerCats.getById)
  .post('/', controllerCats.create)
  .put('/:id', controllerCats.update)
  .patch('/:id/vaccinated', controllerCats.updateStatus)
  .delete('/:id', controllerCats.remove)

module.exports = router

/**
 * Авторизации и валидации
 */
