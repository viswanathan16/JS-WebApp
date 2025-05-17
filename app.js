const express = require('express');
const app = express();
const indexRouter = require('./routes/index');  // ✅ updated path

app.use(express.static('public'));  // ✅ serve index.html
app.use('/', indexRouter);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
