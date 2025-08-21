const mongoose = require("mongoose");

// Student schema follows the specified format
// _id (MongoDB ObjectId) by default
// username (String), email (String), password (String), mobileNumber (int)
const studentSchema = new mongoose.Schema(
  {
    username: { type: String, required: true, trim: true },
    email: { type: String, required: true, unique: true, lowercase: true, trim: true },
    password: { type: String, required: true },
    mobileNumber: { type: Number },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Student", studentSchema);


