'use strict';

module.exports = (Profile) => {
    Profile.disableRemoteMethod("invoke", true);
    Profile.disableRemoteMethod("find", true);

    Profile.get = (req, cb) => {
        Profile.find(req, (req, res)=> {
            cb(null, res)
        });
    };

    Profile.remoteMethod(
        'get',
        {
            accepts: { arg: 'token', type: 'string' },
            returns: { arg: 'data', type: 'array' },
            http: { path: '/', verb: 'get' }
        }
    )
};

