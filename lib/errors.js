'use strict';

var spec = {
  name: 'PaymentProtocol',
  message: 'Internal Error on acmcore-payment-protocol Module: {0}'
};

module.exports = require('acmcore-lib').errors.extend(spec);
