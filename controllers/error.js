exports.get404 = (req, res, next) => {
  res.status(404).render("404", {
    isLogged: req.session.user ? true : false,
    account: req.session.user,
    pageTitle: "Page Not Found",
    path: "/404",
  });
};
