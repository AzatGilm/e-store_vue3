
module.exports = {
  // transpileDependencies: true,
  css: {    
    loaderOptions: {
      // css: {
      //   modules: {
      //     auto: () => true
      //   }
      // },     
      sass: {
        additionalData: `@import "@/assets/styles/styles.scss";`
      }
    }
  }
}
