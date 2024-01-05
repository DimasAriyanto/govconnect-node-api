const proyekRepository = require('../repositories/proyekRepository');

const getAll = async () => {
  return proyekRepository.getAll();
};

const getById = async (id) => {
  return proyekRepository.getById(id);
};

const create = async (payload) => {
  return proyekRepository.create(payload);
};

const update = async (id, payload) => {
  return proyekRepository.update(id, payload);
};

const remove = async (id) => {
  return proyekRepository.remove(id);
};

module.exports = { getAll, getById, create, update, remove };
