const { sequelize, proyek, kontraktor } = require('../models');
const { BadRequestError, NotFoundError } = require('../errors');

const getAll = async () => {
  return proyek.findAll({
    include: [
      {
        model: kontraktor,
        attributes: ['nama'],
      },
    ],
  });
};

const getById = async (id) => {
  const result = await proyek.findByPk(id, {
    include: [
      {
        model: kontraktor,
        attributes: ['nama'],
      },
    ],
  });

  if (!result) {
    throw new NotFoundError(`Proyek dengan ${id} tidak ditemukan`);
  }
};

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await proyek.create(payload, { transaction });
    if (!result) {
      throw new BadRequestError('Gagal menambahkan proyek baru');
    }
    return result;
  });
};

const update = async (id, payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await proyek.update(
      payload,
      {
        where: { id: id },
      },
      { transaction }
    );
    if (result[0] === 0) {
      throw new NotFoundError(`Gagal mengubah proyek, proyek dengan ${id} tidak ditemukan`);
    }
  });
};

const remove = async (id) => {
  const result = await proyek.destroy({
    where: { id },
  });
  if (result === 0) {
    throw new NotFoundError(`Gagal menghapus proyek, proyek dengan ${id} tidak ditemukan`);
  }
};

module.exports = {
  getAll,
  getById,
  create,
  update,
  remove,
};
