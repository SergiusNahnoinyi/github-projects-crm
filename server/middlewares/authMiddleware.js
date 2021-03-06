import passport from "passport";

const auth = (req, res, next) => {
  passport.authenticate("jwt", { session: false }, (err, user) => {
    if (!user || err) {
      return res.status(401).json({
        message: "Unauthorized",
        code: 401,
        data: "Unauthorized",
      });
    }
    req.user = user;
    next();
  })(req, res, next);
};

export default auth;
