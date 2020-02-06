const express = require('express');
const router = express.Router();
const onBooks = require('../handlers/books');

router.route('/')
  .post(onBooks.store)
  .get(onBooks.all)

router.route('/:id')
  .get(onBooks.show)
  .put(onBooks.update)
  .delete(onBooks.delete)

router.route('api/book')
.get(onBooks.showFiltered)

router.route('/books')
.get(onBooks.showBestSeller)

module.exports = router;