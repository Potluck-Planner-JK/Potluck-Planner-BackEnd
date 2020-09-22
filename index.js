require("dotenv/config")

let server = require("./server/server");

let PORT = process.env.PORT || 8472;

server.get("/", (req, res) => {
  res.send("Server Running");
});
console.log(process.env.PORT)

server.listen(PORT, () =>
  console.log(`
  ▂▃▅▇█▓▒░ ➖ Server Running on Port ${PORT} ➖  ░▒▓█▇▅▃▂
  `)
);
