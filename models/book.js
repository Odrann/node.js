const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: 3,
    maxLength: 300
  },
  author: {
    type: String,
    required: true,
    minLength: 10,
    maxLength: 40
  },
  categories: {
    type: [String],
    required: true,
    enum: ['sf', 'fantasy', 'polar', 'thriller', 'novel', 'marketing', 'business', 'non-fiction', 'fiction']
  },
  stock: {
    type: Number,
    required: true,
    min: 0
  },
  publishDate: {
    type: Date,
    required: false,
    default: Date.now
  },
  isBestSeller: {
    type: Boolean,
    required: false,
    default: false
  }
})

// Model
const Book = mongoose.model('Book', bookSchema);

// Export
module.exports = Book;


