const express = require('express');
const { getAll, create, getOne, update, remove } = require('../controllers/proyekController');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/proyek', authenticateUser, getAll);
router.post('/proyek', authenticateUser ,create);
router.get('/proyek/:id', authenticateUser, getOne);
router.put('/proyek/:id', authenticateUser, update);
router.delete('/proyek/:id', authenticateUser, remove);

module.exports = router;