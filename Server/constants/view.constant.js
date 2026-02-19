const VIEW_PATHS = {
  HOME: "/",
  UNIT_CONVERTOR: "/unit-convertor",
};

const VIEW_ROUTES = [
  {
    path: VIEW_PATHS.HOME,
    filePath: "/home/index.ejs",
    view: "home",
  },
  {
    path: VIEW_PATHS.UNIT_CONVERTOR,
    filePath: "/unitConvertor/index.ejs",
    view: "unitConvertor",
  },
];

module.exports = {
  VIEW_PATHS,
  VIEW_ROUTES,
};
