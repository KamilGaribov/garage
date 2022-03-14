const { CORS_ORIGIN_ALLOW_ALL, CORS_ORIGIN_WHITELIST } = require("../config");

module.exports = (req, res, next) => {
    if (CORS_ORIGIN_ALLOW_ALL) return next();
    const origin = req.get("origin");
    if (CORS_ORIGIN_WHITELIST.includes(origin)) return next();
    else
        return next({
            statusCode: 401,
            errorMessage:
                "Cross-Origin Request Blocked: The Same Origin Policy disallows reading the remote resource",
        });
};
