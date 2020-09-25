let supertest = require("supertest");
let server = require("../../server/server");
let data = require("../config");

afterAll(async () => {
  await data.destroy();
});

describe("Register Tests", () => {
  it("Test Registration", async () => {
    let res = await supertest(server)
      .post("/register")
      .send({
        username: "taylorsPotluck3",
        password: "12345",
        date: "today2",
        location: "somewhere2",
      });
    expect(res.statusCode).toBe(201);
    expect(res.type).toBe("application/json");
    expect(res.body.username).toBe("taylorsPotluck3");
  });

  it("Test Username Taken", async () => {
    let res = await supertest(server).post("/register").send({
      username: "taylorsPotluck",
      password: "12345",
      date: "today",
      location: "somewhere"
    });
    expect(res.statusCode).toBe(409);
    expect(res.type).toBe("application/json");
  });
});

describe("Login Tests", () => {
//   it("Test Login", async () => {
//     let res = await supertest(server)
//       .post("/login")
//       .send({ username: "taylorsPotluck", password: "12345" });
//     expect(res.statusCode).toBe(200);
//     expect(res.type).toBe("application/json");
//     expect(res.body.username).toBe("taylorsPotluck");
//   });
  it("Test Invalid Credentials", async () => {
    let res = await supertest(server)
      .post("/login")
      .send({ username: "tyler", password: "1234" });
    expect(res.statusCode).toBe(401);
    expect(res.type).toBe("application/json");
  });
});

// describe("Get Requests", () => {
//     it("Get Guests", async () => {
//         let res = await supertest(server)
//         .get("/potlucks")
//     })
// })