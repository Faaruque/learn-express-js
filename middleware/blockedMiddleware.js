exports.blockedMiddleware = (req, res, next) => {
  if (req.url === "/blog") {
    res.send("<h1>This Page is Block</h1>");
  }
  next();
};

exports.pageLogged = (req, res, next) => {
  console.log("I am looged middleware");
  next();
};

exports.logged = (req, res, next) => {
  console.log("I am Logged");
  next();
};
