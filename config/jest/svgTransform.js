'use strict';

const path = require('path');
const camelcase = require('camelcase');
const { transform } = require('@svgr/core');
const core = require('@babel/core');
const reactAppPreset = require('babel-preset-react-app')

module.exports = {
  getCacheKey(src) {
    return src;
  },
  process(sourceText, sourcePath) {
    const pascalCaseFilename = camelcase(path.parse(sourcePath).name, {
      pascalCase: true,
    });
    const componentName = `Svg${pascalCaseFilename}`;
    const jsCode = transform.sync(sourceText, {
      ref: true,
    }, {
      componentName,
    });
    const componentExportCode =  `
      ${jsCode}
      export { ForwardRef as ReactComponent };
    `;

    return {
      code: core.transform(componentExportCode, {
        filename: sourcePath,
        presets: [reactAppPreset],
      })?.code,
    };
  },
};
