const mongoose = require("mongoose");

const privateEventSchema = new mongoose.Schema({
  privateID: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String },
  images: [{ type: String }],
  date: { type: Date, required: true },
  location: { type: String },
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
  tags: [{ type: String }]
});

module.exports = mongoose.model("PrivateEvent", privateEventSchema);
