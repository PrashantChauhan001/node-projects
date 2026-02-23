const { VIEW_ROUTES } = require("../constants/view.constant");

const viewRouter = require("express").Router();

VIEW_ROUTES.map((routes) => {
  viewRouter.get(routes.path, (req, res) => {
    res.render(routes.filePath.slice(1), {
      filename: routes.view,
      ...routes.data,
    });
  });
});

module.exports = viewRouter;
