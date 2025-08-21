const bcrypt = require("bcryptjs");
const Student = require("../../models/students/Student");

// Get all students
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find().select("-password");
    res.json(students);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get single student by id
exports.getStudent = async (req, res) => {
  try {
    const student = await Student.findById(req.params.id).select("-password");
    if (!student) return res.status(404).json({ message: "Not Found" });
    res.json(student);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create student
exports.createStudent = async (req, res) => {
  try {
    const { username, email, password, mobileNumber } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const student = new Student({ username, email, password: hashed, mobileNumber });
    const saved = await student.save();
    const output = saved.toObject();
    delete output.password;
    res.status(201).json(output);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update student
exports.updateStudent = async (req, res) => {
  try {
    const updates = { ...req.body };
    if (updates.password) {
      const salt = await bcrypt.genSalt(10);
      updates.password = await bcrypt.hash(updates.password, salt);
    }
    const updated = await Student.findByIdAndUpdate(req.params.id, updates, { new: true }).select("-password");
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete student
exports.deleteStudent = async (req, res) => {
  try {
    await Student.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


