let data = require("../../config");

function findPotlucks() {
  return data("potlucks");
}

async function addPotluck(potluck) {
  const [id] = await data("potlucks").insert(potluck, "id");
  return findById(id);
}

function findBy(filter) {
  return data("potlucks").select("id", "username", "password").where(filter);
}

function findById(id) {
  return data("potlucks").select("id", "username").where({ id }).first();
}

function updatePotluck(id, changes) {
  return data("potlucks").where({ id }).update(changes);
}

function deletePotluck(id) {
  return data("potlucks").where({ id }).del();
}

module.exports = {
  findPotlucks,
  addPotluck,
  findBy,
  updatePotluck,
  deletePotluck,
};
