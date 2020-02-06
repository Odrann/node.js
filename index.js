const express = require('express');
const app = express();
const booksRoutes = require('./routes/books');
const port = process.env.PORT = 3000;

// Middleware
app.use(express.json());
app.use('/api/books', booksRoutes);

app.listen(port, () => console.log(`listening on port http://localhost:${port}`));