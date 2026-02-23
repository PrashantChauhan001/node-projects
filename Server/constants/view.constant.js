const VIEW_PATHS = {
  HOME: "/",
  UNIT_CONVERTOR: "/unit-convertor",
  PERSONAL_BLOGGER: "/personal-blogger",
  PERSONAL_BLOGGER_VISITOR: "/personal-blogger/blogs",
  PERSONAL_BLOGGER_ADMIN: "/personal-blogger/admin",
};

const VIEW_ROUTES = [
  {
    path: VIEW_PATHS.HOME,
    filePath: "/home/index.ejs",
    view: "home",
    data: {
      PAGE_LIST: [
        {
          path: VIEW_PATHS.UNIT_CONVERTOR,
          title: "Unit Convertor",
        },
        {
          path: VIEW_PATHS.PERSONAL_BLOGGER,
          title: "Personal Blogs",
        },
      ],
    },
  },
  {
    path: VIEW_PATHS.UNIT_CONVERTOR,
    filePath: "/unitConvertor/index.ejs",
    view: "unitConvertor",
  },
  {
    path: VIEW_PATHS.PERSONAL_BLOGGER,
    filePath: "/personalBlogs/index.ejs",
  },
  {
    path: VIEW_PATHS.PERSONAL_BLOGGER_VISITOR,
    filePath: "/personalBlogs/visitor/visitor.ejs",
  },
  {
    path: VIEW_PATHS.PERSONAL_BLOGGER_ADMIN,
    filePath: "/personalBlogs/admin/admin.ejs",
  },
];

module.exports = {
  VIEW_PATHS,
  VIEW_ROUTES,
};
