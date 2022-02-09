var mongoose = require('mongoose'), Schema = mongoose.Schema;
var randomStringSchema = new Schema({
  name: { type: String, required: true, trim: true },
  type: { type: String, required: true },
  isDeleted: { type: Boolean, required: true, default: false }
}, {
  timestamps: true
}, { collection: 'randomStrings' });

/*
 *Define model and export it for use in other page
 */
var RandomString = module.exports = mongoose.model("randomString", randomStringSchema);
module.exports = RandomString;