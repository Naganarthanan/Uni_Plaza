const PrivateEvent = require("../../models/privates/PrivateEvent");

// Get all
exports.getAllPrivateEvents = async (req, res) => {
  try {
    const events = await PrivateEvent.find();
    res.json(events);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get one
exports.getPrivateEvent = async (req, res) => {
  try {
    const event = await PrivateEvent.findById(req.params.id);
    if (!event) return res.status(404).json({ message: "Not Found" });
    res.json(event);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Create
exports.createPrivateEvent = async (req, res) => {
  const event = new PrivateEvent(req.body);
  try {
    const newEvent = await event.save();
    res.status(201).json(newEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Update
exports.updatePrivateEvent = async (req, res) => {
  try {
    const updatedEvent = await PrivateEvent.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updatedEvent);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete
exports.deletePrivateEvent = async (req, res) => {
  try {
    await PrivateEvent.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
