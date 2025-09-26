const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;

// Middlewares
app.use(express.json());

// GET: root
app.get("/", (req, res) => {
  res.json({ ok: true, message: "Server is up", time: new Date().toISOString() });
});

// GET: echo (ทดสอบรับ query string)
app.get("/echo", (req, res) => {
  res.json({ received_query: req.query });
});

// GET: health
app.get("/healthz", (req, res) => res.send("ok"));

// 404
app.use((req, res) => res.status(404).json({ error: "Not found" }));

app.listen(PORT, () => {
  console.log(`Listening on http://localhost:${PORT}`);
});
