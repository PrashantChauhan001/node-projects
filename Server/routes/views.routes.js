const { VIEW_ROUTES } = require("../constants/view.constant");

const viewRouter = require("express").Router();

VIEW_ROUTES.map((routes) => {
  viewRouter.get(routes.path, (req, res) => {
    res.render(routes.view, { filename: routes.view });
  });
});

module.exports = viewRouter;
