const path = require("path");
const express = require("express");

const app = express();

// Health check
app.get("/api/health", (req, res) => {
  res.json({ ok: true });
});

// Serve React build (root /dist)
const distPath = path.join(process.cwd(), "dist");
app.use(express.static(distPath));

// SPA fallback (except /api)
app.get("*", (req, res, next) => {
  if (req.path.startsWith("/api/")) return next();
  return res.sendFile(path.join(distPath, "index.html"));
});

module.exports = app;
