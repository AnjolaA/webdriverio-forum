var merge = require('deepmerge');
var masterconf = require('./master.conf.js');

 var localconf = {

   capabilities: [{
       // maxInstances can get overwritten per capability. So if you have an in-house Selenium
       // grid with only 5 firefox instances available you can make sure that not more than
       // 5 instances get started at a time.
       maxInstances: 5,
       //
       browserName: 'chrome'

   }
  //  ,
  //   {
  //      browserName: 'firefox'
  //   }
  ]
 };

 exports.config = merge(masterconf.config, localconf);
