/**
 * @author: @AngularClass
 */

// Look in ./config folder for webpack.dev.js
switch (process.env.NODE_ENV) {
  case 'prod':
  case 'production':
    module.exports = require('./configs/webpack.prod')({env: 'production'});
    break;
  case 'test':
  case 'testing':
    module.exports = require('./configs/webpack.test')({env: 'test'});
    break;
  case 'dev':
  case 'development':
  default:
    module.exports = require('./configs/webpack.dev')({env: 'development'});
}
