const db = require('../models');

// CREATE => WORKS
exports.store = async (req, res) => {
  try {
    let book = await db.Book.create(req.body);
    return res
      .status(201)
      .json(book);
  } catch (err) {
    return res
      .status(403)
      .json({
        message: 'Oups ! la création du livre  n\'a pas eu lieu',
        error: err.message
      });
  }
};


// READ ALL => WORKS
module.exports.all = async (req, res) => {
  try {
    let books = await db.Book.find();
    return res
      .status(200)
      .json(books);
  } catch (err) {
    return res
      .status(500)
      .json({
        message: 'Oups ! Une erreur est survenue',
        error: err.message
      });
  }
};

// READ ONE =>WORKS
module.exports.show = async (req, res) => {
  try {
    let book = await db.Book.findById(req.params.id);
    return res
      .status(200)
      .json(book);
  } catch (err) {
    return res
      .status(404)
      .json({
        message: 'Oups ! Une erreur est survenue',
        error: err.message
      });
  }
};

//READ FILTERED => 
module.exports.show = async (req, res) => {
  try {
    let book = await db.Book.findById(req.params.id);
    return res
      .status(200)
      .json(book);
  } catch (err) {
    return res
      .status(404)
      .json({
        message: 'Oups ! Une erreur est survenue',
        error: err.message
      });
  }
};






// UPDATE =>  WORKS
module.exports.update = async (req, res) => {
  try {
    let book = await db.Book.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true });
    return res
      .status(200)
      .json(book);
  } catch (err) {
    return res
      .status(404)
      .json({
        message: 'Oups ! Une erreur est survenue',
        error: err.message
      });
  }
};

// DELETE => WORKS
module.exports.delete = async (req, res) => {
  try {
    await db.Book.findByIdAndRemove(req.params.id);
    return res
      .status(204)
      .json({});
  } catch (err) {
    return res
      .status(404)
      .json({
        message: 'Oups ! Une erreur est survenue',
        error: err.message
      });
  }
};