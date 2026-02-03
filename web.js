const http = require("http");
const app = require("./server/app");

const PORT = process.env.PORT || 8080;

http.createServer(app).listen(PORT, "0.0.0.0", () => {
  console.log(`Server listening on port ${PORT}`);
});
