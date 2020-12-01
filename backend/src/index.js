import {server} from './server';

import './database';

server.start({port:3500},({port})=>{
    console.log('Server on PORT',port);
})