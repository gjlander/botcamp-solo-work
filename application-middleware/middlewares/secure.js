const secure = (req, res, next) => {
    try {
        const { token } = req.query;
        if (!token) {
            throw new Error("Must have a token!");
        }
        next();
    } catch (error) {
        next(error);
    }
};

module.exports = secure;
