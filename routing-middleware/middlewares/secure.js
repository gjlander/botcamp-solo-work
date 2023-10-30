const secure = (req, res, next) => {
    try {
        const { token } = req.params;
        if (token.length <= 3) {
            throw new Error("Token must be 4 characters or more.");
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = secure;
