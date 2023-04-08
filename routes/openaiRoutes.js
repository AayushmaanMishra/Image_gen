const express = require('express');
const ge = require('faker/lib/locales/ge');
const { generateimage } = require('../controllers/openaiController');
const router = express.Router();

router.post('/generateimage', generateimage);

module.exports = router;