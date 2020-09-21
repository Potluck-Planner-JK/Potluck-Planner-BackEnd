require("dotenv/config")
// let cookieParser = require("cookie-parser")

let server = require("./server/server");

let port = process.env.PORT || 8472;

// server.use(cookieParser())

server.get("/", (req, res) => {
  res.send("Server Running");
});

server.listen(port, () =>
  console.log(`
  ▂▃▅▇█▓▒░ ➖ Server Running on Port ${port} ➖  ░▒▓█▇▅▃▂
  `)
);
