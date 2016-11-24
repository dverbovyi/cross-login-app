module.exports = function(app) {
    const UserModel = app.models.User,
        RecordModel = app.models.Record;

    UserModel.records = (userId, cb) => {
        RecordModel.find({ where: { userId: userId } }, (err, records) => {
            cb(err, records);
        });
    };

    UserModel.remoteMethod(
        'records', {
            accepts: { arg: 'userId', type: 'number' },
            returns: { arg: 'records', type: 'array' },
            http: { path: '/:id/records', verb: 'GET' }
        }
    );

    app.post('/api/login', (req, res, next) => {
        UserModel.login({
            email: req.body.email,
            password: req.body.password
        }, (err, result) => {
            if (err)
                return res.status(401).json(err);

            res.json({
                "token": result.id,
                "ttl": result.ttl
            });

            res.status(200);
        });
    });

    app.post('/api/logout', (req, res, next) => {
        const access_token = req.query.access_token;

        if (!access_token) {
            return res.status(400).json({ "error": "access token required" });
        }

        UserModel.logout(access_token, function(err) {
            if (err)
                return res.status(404).json({ "error": "logout failed" });

            res.status(204);
        });
    });

    app.use('/api', app.loopback.rest());

};
