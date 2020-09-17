function findPotlucks() {
  return data("potlucks");
}

async function addPotluck(potluck) {
  const [id] = await db("potlucks").insert(user, "id");
  return findById(id);
}

function findBy(filter) {
  return db("potlucks").select("id", "username", "password").where(filter);
}

function deletePotluck(id) {
  return db("potlucks").where({ id }).del();
}

module.exports = {
  findPotlucks,
  addPotluck,
  findBy,
  deletePotluck,
};
