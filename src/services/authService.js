const { BadRequestError, UnauthorizedError } = require('../errors');
const { createTokenUser } = require('../utils/createTokenUser');
const userRepository = require('../repositories/userRepository');
const nodemailerConfig = require('../config/nodemailerConfig');
const bcryptConfig = require('../config/bcryptConfig');
const jwtConfig = require('../config/jwtConfig');
const { generateOTP } = require('../utils/generateOtp');

const register = async ({ name, email, password, password_confirmation }) => {
  if (password !== password_confirmation) {
    throw new BadRequestError('Please ensure that the password and password confirmation match!');
  }

  const check = await userRepository.getByEmail(email);
  if (check) {
    throw new BadRequestError('User has already been used!');
  }

  const encryptedPassword = await bcryptConfig.hashPassword(password);
  const result = await userRepository.create({ name, email, password: encryptedPassword });

  // const otp = generateOTP();
  // await nodemailerConfig.sendEmail(email, otp);

  return result;
};

const login = async ({ email, password }) => {
  if (!email || !password) {
    throw new BadRequestError('Please provide email and password');
  }

  const result = await userRepository.getByEmail(email);

  const isPasswordCorrect = await bcryptConfig.comparePasswords(password, result.password);
  if (!isPasswordCorrect) {
    throw new UnauthorizedError('Invalid Credentials');
  }

  const token = jwtConfig.createJWT({ payload: createTokenUser(result) });

  return { result, token };
};

module.exports = { register, login };
