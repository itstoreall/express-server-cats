const { HttpCode } = require('../helpers/constants');
const { CatsService } = require('../services');

const CatsService = new CatsService();

const getAll = (req, res, next) => {
  try {
    const cats = await CatsService.getAll()
    res.status(HttpCode.OK).json({
      status: 'succes',
      code: HttpCode.OK,
      data: {
        cats,
      }
    })
  } catch (e) {
    next(e);
  }
};
const getById = (req, res, next) => {};
const create = (req, res, next) => {};
const update = (req, res, next) => {};
const updateStatus = (req, res, next) => {};
const remove = (req, res, next) => {};

module.eports = { getAll, getById, create, update, updateStatus, remove };

/**
 * Методы и обработчики маршрутов
 * Задача - формирование ответа
 */
