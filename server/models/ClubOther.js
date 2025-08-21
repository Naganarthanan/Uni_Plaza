const mongoose = require("mongoose");

const clubOtherSchema = new mongoose.Schema({
  clubname: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  images: [{ type: String }],
  date: { type: Date, required: true },
  location: String,
  links: [
    {
      label: String,
      link: String
    }
  ],
  contact: {
    email: { type: String, required: true },
    phoneNum: Number
  },
  universityName: String,
  tags: [{ type: String }],
  price: { type: Number }
});

module.exports = mongoose.model("ClubOther", clubOtherSchema);
