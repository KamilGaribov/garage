const { CORS_ORIGIN_ALLOW_ALL, CORS_ORIGIN_WHITELIST } = require("../config");

module.exports = (req, res, next) => {
    const host = req.headers.host;
    if (CORS_ORIGIN_ALLOW_ALL) return next();
    if (CORS_ORIGIN_WHITELIST.includes(host)) return next();
    else
        return next({
            statusCode: 401,
            errorMessage:
                "Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource",
        });
};
