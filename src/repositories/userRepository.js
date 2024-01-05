const { sequelize, user } = require('../models');
const { BadRequestError, NotFoundError } = require('../errors');

const getByEmail = async (email) => {
  return sequelize.transaction(async (transaction) => {
    const result = await user.findOne({ where: { email } }, { transaction });
    return result;
  });
};

const create = async (payload) => {
  return sequelize.transaction(async (transaction) => {
    const result = await user.create(payload, { transaction });

    if (!result) {
      throw new BadRequestError('Failed to add new user');
    }
    return result;
  });
};

const updateActivate = async (email) => {
  return sequelize.transaction(async (transaction) => {
    const result = await user.update(
      {
        isVerified: true,
      },
      {
        where: { email: email },
      },
      { transaction }
    );

    if(!result) {
      throw new NotFoundError(`Failed to update user, User with ${email} not found`);
    }
  });
};

module.exports = { getByEmail, create, updateActivate };
