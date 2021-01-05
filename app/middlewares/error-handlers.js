const {BadRequest} = require('http-errors');

const isInstanceOfSome = typesList => tobeMatched =>
    typesList.some(oneType => tobeMatched instanceof oneType);

module.exports = {
    // 400	BadRequest
    handleBadRequestError(error, req, res, next) {
        if (isInstanceOfSome([BadRequest])(error)) {
            return res.status(400).json({error: error});
        } else {
            next(error);
        }
    }
}