import React from 'react';

import {useQuery,useMutation} from '@apollo/react-hooks';
import {gql} from 'apollo-boost';

const GET_MENUS = gql`
    {
        menus {
            _id
            starter
            main
            dessert
            price
        }
    }
`

const DELETE_MENU = gql`

    mutation DeleteMenu($id:ID!){
        deleteMenu(_id:$id){
            _id
        }
    }
`

const MenuList = ()=>{

    const [deleteMenu] = useMutation(DELETE_MENU);

    const onDeleteMenu = async (id)=>{
        await deleteMenu({variables:{id}});
        window.location.href='/';
    }

    const {loading,error,data} = useQuery(GET_MENUS);
        if(loading) return <h4>Loading Menus...</h4>
        if(error){
            return <h4>Error</h4>
        }
        return (
            <div className="row">
                {
                    data.menus.map(({_id,starter,main,dessert,price})=>{
                        return (
                            <div key={_id} className="col-md-3">
                                <div  className="card m-2">
                                    <div className="card-body">
                                        
                                        <h4>Menu</h4>
                                        <p>STARTER: {starter}</p>
                                        <p>MAIN: {main}</p>
                                        <p>DESSERT: {dessert}</p>
                                        <h3>S/. {price}</h3>
                                    </div>
                                    <button 
                                        onClick={()=> onDeleteMenu(_id)}
                                        className="btn btn-danger btn-sm btn-block">
                                        Eliminar
                                    </button>
                                </div>
                            </div>
                        )
                    })
                }
            </div>  
    )
}

export default MenuList;