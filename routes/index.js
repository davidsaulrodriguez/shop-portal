const path = require('path');
const router = require('express').Router();
const apiRoutes = require('./api');
const keys = require('../config/keys');
const { apiURL } = keys.app;

const api = `${apiURL}`;

router.use(api, apiRoutes);

router.use(function (_req, res) {
  res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

module.exports = router;
