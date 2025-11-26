const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WordSchema = new Schema({
  english: { type: String, required: true },
  german: { type: String, required: true },
  vietnamese: { type: String, required: true },
  userId: { type: Schema.Types.ObjectId, ref: 'User' }, // track creator
});

module.exports = mongoose.model('Words', WordSchema);