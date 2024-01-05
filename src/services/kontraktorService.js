const kontraktorRepository = require('../repositories/kontraktorRepository');

const getAll = async () => {
  return kontraktorRepository.getAll();
};

const getById = async (id) => {
  return kontraktorRepository.getById(id);
};

const create = async (payload) => {
  return kontraktorRepository.create(payload);
};

const update = async (id, payload) => {
  return kontraktorRepository.update(id, payload);
};

const remove = async (id) => {
  return kontraktorRepository.remove(id);
};

module.exports = { getAll, getById, create, update, remove };
