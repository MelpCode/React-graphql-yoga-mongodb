import mongoose from 'mongoose';

import config from '../config'


mongoose.connect(config.MONGODB_URI,{
    useFindAndModify:true,
    useNewUrlParser:true,
    useUnifiedTopology:true
})
    .then(db=>console.log('DB is connected'))
    .catch(err=>console.log(err))