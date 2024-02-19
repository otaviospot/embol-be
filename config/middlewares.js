module.exports = [
  "strapi::errors",
  "strapi::security",
  "strapi::poweredBy",
  "strapi::logger",
  "strapi::query",
  "strapi::body",
  "strapi::session",
  "strapi::favicon",
  "strapi::public",
  {
    name: "strapi::cors",
    config: {
      origin: [
        "https://sites.newbasca.com",
        "https://embol-yzffe.ondigitalocean.app",
        "http://localhost:1337",
        "http://localhost:3000",
      ],
    },
  },
  // ... outros middlewares ...
];
