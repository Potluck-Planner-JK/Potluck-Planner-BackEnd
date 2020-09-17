let server = require("./server/server");

let port = process.env.PORT || 8472;

server.get("/", (req, res) => {
  res.send("Server Running");
});

server.listen(port, () =>
  console.log(`
  ▂▃▅▇█▓▒░ ➖ Server Running on Port ${port} ➖  ░▒▓█▇▅▃▂
  `)
);
