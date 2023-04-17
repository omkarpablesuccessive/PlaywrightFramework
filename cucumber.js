module.exports = { default: '--publish-quiet' }  

 const common = `
     --require config/webConfig.js
     --require tests/src/ui_test/step_defination/**/*.steps.js
                  
 `
 module.exports = {
   default: `${common} tests/src/ui_test/features/**/*.feature`,
 }