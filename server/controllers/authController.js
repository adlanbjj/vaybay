const { createUser, findUserByUsername } = require('../models/userModel');
const { hashPassword, comparePasswords } = require('../utils/hashUtils');

async function register(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Поля username и password обязательны' });
  }

  const existingUser = await findUserByUsername(username);
  if (existingUser) {
    return res.status(400).json({ message: 'Пользователь с таким именем уже существует' });
  }

  const hashedPassword = await hashPassword(password);
  await createUser(username, hashedPassword);

  res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
}

async function login(req, res) {
  const { username, password } = req.body;

  if (!username || !password) {
    return res.status(400).json({ message: 'Поля username и password обязательны' });
  }

  const user = await findUserByUsername(username);
  if (!user) {
    return res.status(401).json({ message: 'Неверное имя пользователя или пароль' });
  }

  const isPasswordMatch = await comparePasswords(password, user.password);
  if (!isPasswordMatch) {
    return res.status(401).json({ message: 'Неверное имя пользователя или пароль' });
  }

  res.status(200).json({ message: 'Успешный вход' });
}

module.exports = { register, login };
