const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.send('Hello from JS Web App!');
});

module.exports = router;
