'use strict';

module.exports = (Facebook) => {
    Facebook.disableRemoteMethod("invoke", true);
    Facebook.disableRemoteMethod("find", true);

    Facebook.photos = (arg0, cb) => {
        Facebook.find(arg0, 'photos', (req, res) => {
            cb(null, res.data)
        });
    };

    Facebook.remoteMethod(
        'photos', {
            accepts: { arg: 'token', type: 'string' },
            returns: { arg: 'data', type: 'array' },
            http: { path: '/photos', verb: 'GET' }
        }
    );

    Facebook.me = (req, cb) => {
        Facebook.find(req, (req, res) => {
            cb(null, res)
        });
    };

    Facebook.remoteMethod(
        'me', {
            accepts: { arg: 'token', type: 'string' },
            returns: { arg: 'data', type: 'object' },
            http: { path: '/me', verb: 'GET' }
        }
    );
};