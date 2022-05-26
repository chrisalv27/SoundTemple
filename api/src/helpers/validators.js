const { check } = require("express-validator");

const loginValidator = [
    check("username").exists().isLength({min: 3, max:20}),
    check("password").exists().isLength({min: 6, max:50})
]

const signupValidator = [
    ...loginValidator,
    check("confirmPassword").exists().isLength({min: 1, max:50}),
    check("email").exists().isEmail(),
    check("password").custom((password, { req } ) => password === req.body.confirmPassword)
]

const squawkValidator = [
    check("body").exists().isLength({ min: 1, max: 241 })
]

module.exports = {
    loginValidator,
    signupValidator,
    squawkValidator
}