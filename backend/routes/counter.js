const express = require("express");
const router = express.Router();
const { getCount, increment, decrement, setCount } = require("../services/blockchain");

// Get current counter value
router.get("/", async (req, res) => {
  try {
    const value = await getCount();
    res.json({ value: value.toString() });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Increment counter
router.post("/inc", async (req, res) => {
  try {
    const tx = await increment();
    await tx.wait();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Decrement counter
router.post("/dec", async (req, res) => {
  try {
    const tx = await decrement();
    await tx.wait();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// Set counter (owner only)
router.post("/set", async (req, res) => {
  const { value } = req.body;
  try {
    const tx = await setCount(value);
    await tx.wait();
    res.json({ success: true });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
