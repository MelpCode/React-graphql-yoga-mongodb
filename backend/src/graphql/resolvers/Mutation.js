
import Menu from '../../models/Menu';
const Mutation = {

    createMenu: async(_,{starter,main,dessert,price})=>{
        const newMenu = new Menu({
            starter,main,dessert,price
        });
        return await newMenu.save();
    },

    deleteMenu: async (_,{_id})=>{
        return await Menu.findByIdAndDelete(_id);
    },

    updateMenu: async (_,{_id,input})=>{
        return await Menu.findByIdAndUpdate(_id,input,{new:true});
    }
};

export default Mutation;