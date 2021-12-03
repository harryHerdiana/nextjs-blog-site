const { PHASE_DEVELOPMENT_SERVER } = require("next/constants");
//  module.exports ={
//   images: {
//     domains: ["images.unsplash.com"],
//   },
// }

module.exports = (phase) => {
  if (phase === PHASE_DEVELOPMENT_SERVER) {
    return {
      images: {
        domains: ["images.unsplash.com"],
      },
      env: {
        mongodbUser: "harryHerdiana",
        mongeodbPass: "5zh6GO54C3YFMKXD",
        mongodbCluster: "cluster0",
        mongodbDatabase: "next-dev-blog",
      },
    };
  }
  return {
    images: {
      domains: ["images.unsplash.com"],
    },
    env: {
      mongodbUser: "harryHerdiana",
      mongeodbPass: "5zh6GO54C3YFMKXD",
      mongodbCluster: "cluster0",
      mongodbDatabase: "nextBlog",
    },
  };
};
