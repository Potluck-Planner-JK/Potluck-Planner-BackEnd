let data = require("../../config");

function findGuests() {
  return data("guests");
}

async function addGuest(guest) {
  let [id] = await data("guests").insert(guest, "id");
}

function findBy(filter) {
  return data("guests").select("id", "name", "email", "item").where(filter);
}

function updateGuest(id, changes) {
  return data("guests").where({ id }).update(changes);
}

function deleteGuest(id) {
  return data("guests").where({ id }).del();
}

module.exports = {
  findGuests,
  addGuest,
  findBy,
  updateGuest,
  deleteGuest,
};
