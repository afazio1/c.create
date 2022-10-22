module.exports.isLoggedIn = (req, res, next) => {
    if (!req.isAuthenticated()) {
        res.status(400)
        throw new Error("Please sign in or register");
    }
}