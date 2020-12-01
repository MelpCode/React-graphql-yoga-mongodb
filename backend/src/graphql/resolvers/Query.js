import Menu from '../../models/Menu';

const Query = {
    ping(){
        return "Pong!"
    },
    menus: async()=>{
        return await Menu.find();
    }
}

export default Query;