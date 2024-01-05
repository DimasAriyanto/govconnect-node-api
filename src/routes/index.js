const router = require('express').Router();

const v1 = '/api';

const Auth = require('./authRouter');
const Kontraktor = require('./kontraktorRouter');
const Proyek = require('./proyekRouter');

const notFoundMiddleware = require('../middlewares/not-found');
const handdleErrorMiddleware = require('../middlewares/handle-error');

router.get('/', (req, res) => {
  res.status(200).json({
    message: 'Welcome to api GovConnect',
  });
});

router.use(`${v1}`, Auth);
router.use(`${v1}`, Kontraktor);
router.use(`${v1}`, Proyek);

router.use(notFoundMiddleware);
router.use(handdleErrorMiddleware);

module.exports = router;
