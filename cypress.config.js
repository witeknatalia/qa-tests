const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const preprocessor = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  await preprocessor.addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"]
        },
        module: {
          rules: [
            {
              test: /\.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config
                }
              ]
            }
          ]
        }
      }
    })
  );

  return config;
}

module.exports = defineConfig({
  e2e: {
    specPattern: "**/*.feature",
    baseUrl: "http://qalab.pl.tivixlabs.com/",
    video: false,
    setupNodeEvents
  }
});
