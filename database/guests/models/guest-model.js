function findGuests() {
  return data("guests");
}

async function addGuest() {
  let [id] = await db("guests").insert(user, "id");
  return findById(id);
}

function findBy(filter) {
  return db("guests").select("id", "username", "password").where(filter);
}

function deleteGuest(id) {
  return db("guests").where({ id }).del();
}

module.exports = {
  findGuests,
  addGuest,
  findBy,
  deleteGuest,
};
