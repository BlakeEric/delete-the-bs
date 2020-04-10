module.exports = {
  testEnvironment: 'jsdom',
  watchPlugins: ['jest-watch-master'],
  setupFilesAfterEnv: ["./test-setup.js"]
};
