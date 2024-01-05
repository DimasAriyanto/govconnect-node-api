const { sequelize, kontraktor } = require('../models');
const { BadRequestError, NotFoundError } = require('../errors');

const getAll = async () => {
  return kontraktor.findAll();
};

const getById = async (id) => {
  const result = await kontraktor.findByPk(id);
  if (!result) {
    throw new NotFoundError(`Kontraktor dengan ${id} tidak ditemukan`);
  }
};

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await kontraktor.create(payload, { transaction });
    if (!result) {
      throw new BadRequestError('Gagal menambahkan kontraktor baru');
    }
    return result;
  });
};

const update = async (id, payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await kontraktor.update(
      payload,
      {
        where: { id: id },
      },
      { transaction }
    );
    if (result[0] === 0) {
      throw new NotFoundError(`Gagal mengubah kontraktor, kontraktor dengan ${id} tidak ditemukan`);
    }
  });
};

const remove = async (id) => {
  const result = await kontraktor.destroy({
    where: { id },
  });
  if (result === 0) {
    throw new NotFoundError(`Gagal mengubah kontraktor, kontraktor dengan ${id} tidak ditemukan`);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
