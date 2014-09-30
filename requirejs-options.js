module.exports = {
  appDir: 'app-source',
  baseUrl: '.',
  mainConfigFile: 'app-source/app.js',
  dir: 'app-production',
  modules: [
    // First set up the common build layer.
    {
      // module names are relative to baseUrl
      name: 'app',
      // List common dependencies here. Only need to list
      // top level dependencies, 'include' will find
      // nested dependencies.
      include: [
       
      ]
    }
    
    
    
  ]
};