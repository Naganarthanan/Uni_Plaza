const ClubOther = require("../../models/clubs/ClubOther");

exports.getAllClubOthers = async (req, res) => {
  try {
    const others = await ClubOther.find();
    res.json(others);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getClubOther = async (req, res) => {
  try {
    const other = await ClubOther.findById(req.params.id);
    if (!other) return res.status(404).json({ message: "Not Found" });
    res.json(other);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createClubOther = async (req, res) => {
  try {
    const other = new ClubOther(req.body);
    const saved = await other.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateClubOther = async (req, res) => {
  try {
    const updated = await ClubOther.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteClubOther = async (req, res) => {
  try {
    await ClubOther.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
