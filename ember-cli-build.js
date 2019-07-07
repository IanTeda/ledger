'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {

    /**
     * EMBER BOOTSTRAP
     * https://www.ember-bootstrap.com
     * ember install ember-bootstrap
     */
    'ember-bootstrap': {
      'bootstrapVersion': 4,
      'importBootstrapFont': false,
      'importBootstrapCSS': true
    }

    /**
     * FONT AWESOME
     * Config in ./config/environment.js > EmberENV: {}
     */

     /**
      * EMBER POSTCSS
      * ember install ember-cli-postcss
      * npm i --save-dev postcss-import postcss-css-variables postcss-preset-env postcss-nested
      */
    postcssOptions: {
      compile: {
          // Order is important
          plugins: [
              {module: require("postcss-import")}, // https://github.com/postcss/postcss-import
              {module: require("postcss-css-variables")}, // https://github.com/MadLittleMods/postcss-css-variables
              {module: require("postcss-preset-env")}, // https://preset-env.cssdb.org/
              {module: require("postcss-nested")}, // https://github.com/postcss/postcss-nested
          ],
      }

  }


  });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
