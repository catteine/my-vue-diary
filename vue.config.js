module.exports = {
  css: {
      loaderOptions: {
          sass: {
            additionalData: `
              @use '@/styles/index' as *;
            `
          }
      }
  }
}