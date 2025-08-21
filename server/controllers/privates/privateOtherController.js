const PrivateOther = require("../../models/privates/PrivateOther");

exports.getAllPrivateOthers = async (req, res) => {
  try {
    const others = await PrivateOther.find();
    res.json(others);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getPrivateOther = async (req, res) => {
  try {
    const other = await PrivateOther.findById(req.params.id);
    if (!other) return res.status(404).json({ message: "Not Found" });
    res.json(other);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createPrivateOther = async (req, res) => {
  try {
    const other = new PrivateOther(req.body);
    const saved = await other.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updatePrivateOther = async (req, res) => {
  try {
    const updated = await PrivateOther.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deletePrivateOther = async (req, res) => {
  try {
    await PrivateOther.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
