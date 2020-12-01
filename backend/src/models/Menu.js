import {Schema,model} from 'mongoose';

const menuSchema = new Schema({
    starter:{type:String,required:true},
    main:{type:String,required:true},
    dessert:{type:String,required:true},
    price:{type:Number,required:true}
})

export default model('Menu',menuSchema)