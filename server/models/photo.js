'use strict';

module.exports = (Photo) => {
    Photo.disableRemoteMethod("invoke", true);
    Photo.disableRemoteMethod("find", true);

    Photo.get = (arg0, cb) => {
        Photo.find(arg0, 'photos', (req, res) => {
            cb(null, res)
        });
    };

    Photo.remoteMethod(
        'get',
        {
            accepts: [
                { arg: 'token', type: 'string' }
            ],
            returns: { arg: 'data', type: 'array' },
            http: { path: '/', verb: 'get' }
        }
    )
};