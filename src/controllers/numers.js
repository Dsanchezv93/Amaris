const { validationResult } = require('express-validator')
const { ErrorHandler } = require('../utils/errorHandler')
const { primo } = require('../utils/numPrimos')
const { CD500, CD400, CD403 } = require('../constant/codeInside')
const {
  errorParam,
  errorDeEjecucion,
  registroSuccess,
  registroNotFound,
  registroNotExist,
  registroExist,
  updateSuccess,
  deleteSuccess,
  createSuccess
} = require('../constant/messages')

exports.health = (req, res, next) => {
  res.json({
    status: true,
    data: 'API is available',
  })
  next()
}

exports.all = async(req, res, next) => {
  try {
    // Validate Express - Params - Body
    const result = validationResult(req)
    if (!result.isEmpty()) throw new ErrorHandler(403, CD403, errorParam, result.mapped())

    const { number } = req.params

    let c = number;
    let j = 1;
    let numerosPrimos = [1];
    for (; j <= c; j++) {
      if (primo(j)) {
        numerosPrimos.push(j);
      }
    }

    await res.status(200)
      .json({
        status: true,
        internalCode: '0',
        message: registroSuccess,
        data: numerosPrimos.reverse()
      })

  } catch (e) {
    console.log(e)
    next(e)
  }
}

exports.hello = async(req, res, next) => {
  try {
    await res.status(200)
      .json({
        status: true,
        internalCode: '0',
        message: registroSuccess,
        data: 'Hello Word!'
      })

  } catch (e) {
    console.log(e)
    next(e)
  }
}
