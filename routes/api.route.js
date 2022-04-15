const express = require('express');

const router = express.Router();
const validation = require('../validation/validation');

const {
  find,
  update,
} = require('../controllers/api/profile.controller');

router.get('/me', find);
router.put(
  '/me',
  validation.updateProfile,
  update,
);

module.exports = router;
