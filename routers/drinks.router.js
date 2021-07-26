const { Router } = requile('express')

const { mainController } = require('../controllers/drinks.controller')

const router = Router()

router.get('/drinks', mainController.getDrink)
router.get('/drinks/inStock', mainController.listDrink)
router.get('/drinks/:id', mainController.infoDrink)
router.post('/drinks', mainController.addDrink)
router.delete('/drinks/:id', mainController.delDrink)
router.patch('/drinks/:id', mainController.editDrink)

module.exports = router

// GET /drinks – список всех напитков
// GET /drinks/in-stock – список всех напитков, которые есть в наличии
// GET /drinks/:id – подробная информация о конкретном напитке
// POST /drinks – добавление нового напитка
// DELETE /drinks/:id – удаление конкретного напитка
// PATCH /drinks/:id – изменение конкретного напитка