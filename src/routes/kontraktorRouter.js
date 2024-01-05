const express = require('express');
const { getAll, create, getOne, update, remove } = require('../controllers/kontraktorController');
const { authenticateUser } = require('../middlewares/auth');
const router = express.Router();

router.get('/kontraktor', authenticateUser, getAll);
router.post('/kontraktor', authenticateUser ,create);
router.get('/kontraktor/:id', authenticateUser, getOne);
router.put('/kontraktor/:id', authenticateUser, update);
router.delete('/kontraktor/:id', authenticateUser, remove);

module.exports = router;