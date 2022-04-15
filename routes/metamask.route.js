const express = require('express');

const router = express.Router();
const validation = require('../validation/validation');

const {
  signature,
  authenticate,
  logout,
} = require('../controllers/web3auth.controller');

router.get('/ethereum/signature', signature);
router.post(
  '/ethereum/authenticate',
  validation.authenticate,
  authenticate,
);
router.post('/ethereum/logout', logout);

module.exports = router;
