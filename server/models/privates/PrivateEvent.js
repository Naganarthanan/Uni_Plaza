const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  label: String,
  link: String,
});

const privateEventSchema = new mongoose.Schema({
  privateID: { type: String, required: true },
  title: { type: String, required: true },
  description: String,
  images: [String],
  date: Date,
  location: String,
  links: [linkSchema],
  contact: {
    email: { type: String, required: true },
    phone: Number,
  },
  tags: [String],
});

module.exports = mongoose.model("PrivateEvent", privateEventSchema);
