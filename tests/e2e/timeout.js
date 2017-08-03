'use strict';

var _require = require('cucumber'),
    defineSupportCode = _require.defineSupportCode;

defineSupportCode(function (_ref) {
    var setDefaultTimeout = _ref.setDefaultTimeout;

    setDefaultTimeout(30 * 1000);
});