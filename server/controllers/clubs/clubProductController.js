const ClubProduct = require("../../models/clubs/ClubProduct");

exports.getAllClubProducts = async (req, res) => {
  try {
    const products = await ClubProduct.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getClubProduct = async (req, res) => {
  try {
    const product = await ClubProduct.findById(req.params.id);
    if (!product) return res.status(404).json({ message: "Not Found" });
    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createClubProduct = async (req, res) => {
  try {
    const product = new ClubProduct(req.body);
    const saved = await product.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.updateClubProduct = async (req, res) => {
  try {
    const updated = await ClubProduct.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

exports.deleteClubProduct = async (req, res) => {
  try {
    await ClubProduct.findByIdAndDelete(req.params.id);
    res.json({ message: "Deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
