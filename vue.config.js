module.exports = {
  pwa: {
    name: "CMS SAF",
    workboxPluginMode: "InjectManifest",
    themeColor: "#4A90E2",
    workboxOptions: {
      swSrc: "./src/sw.js",
      swDest: "service-worker.js"
    }
  },
  productionSourceMap: false,
  transpileDependencies: ["vuetify", "register-service-worker"],
  publicPath: process.env.NODE_ENV === "production" ? "/saf/" : "/"
};
