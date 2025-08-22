const ClubEvent = require("../../models/clubs/ClubEvent");

exports.getAllClubEvents = async (req, res) => {
  try {
    const events = await ClubEvent.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getClubEvent = async (req, res) => {
  try {
    const event = await ClubEvent.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Not Found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createClubEvent = async (req, res) => {
  try {
    const event = new ClubEvent(req.body);
    const saved = await event.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateClubEvent = async (req, res) => {
  try {
    const updated = await ClubEvent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteClubEvent = async (req, res) => {
  try {
    await ClubEvent.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


