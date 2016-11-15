module.exports = function (app) {

    app.use('/api', app.loopback.rest());
};
