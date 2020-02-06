const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/booksdb', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useFindAndModify: false
}).then(() => {
  console.log('Connected successfully');
}).catch(err => {
  console.error(`Error while connecting to DB : ${err}`);
})

module.exports.Book = require('./book');