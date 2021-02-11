const { param } = require('express-validator');

exports.all = [
  param('number')
  .isInt()
  .notEmpty()
  .trim()
];
