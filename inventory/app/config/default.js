'use strict';
import development from './development';
import production from './production';

// console.log('process.env.NODE_ENV',process.env.NODE_ENV);
const NODE_ENV = process.env.NODE_ENV;
let config = null;
if(NODE_ENV === 'production'){
  config = production;
}else {
  config = development;
}

export default config;
