import React,{useState} from 'react';
import {gql} from 'apollo-boost';
import {useMutation} from '@apollo/react-hooks';

const CREATE_MENU = gql`

    mutation CreateMenu($starter:String!,$main:String!,$dessert:String!,$price:Float!){
        createMenu(starter:$starter,main:$main,dessert:$dessert,price:$price){
            _id
        }
    }
`

const MenuForm =()=>{

    const [starter, setStarter] = useState('');
    const [main,setMain] = useState('');
    const [dessert,setDessert] = useState('');
    const [price,setPrice] = useState('');

    const [createMenu] = useMutation(CREATE_MENU)

    return (
        <div className="row">
            <div className="col-md-5 offset-md-4">
                <div className="card">
                    <div className="card-body">
                        <form onSubmit={ async (e)=>{
                            e.preventDefault();
                            const priceFloat = parseFloat(price);
                            await createMenu({variables:{starter,main,dessert,price:priceFloat}});
                            window.location.href='/'
                        }}>
                        <div className="form-group">
                            <input 
                                type="text"
                                name="starter"
                                placeholder="Enter Starter Dish"
                                className="form-control"
                                value={starter}
                                onChange={e=>setStarter(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text"
                                name="main"
                                placeholder="Enter Main Dish"
                                className="form-control"
                                value={main}
                                onChange={e=>setMain(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text"
                                name="dessert"
                                placeholder="Enter Dessert Dish"
                                className="form-control"
                                value={dessert}
                                onChange={e=>setDessert(e.target.value)}
                            />
                        </div>
                        <div className="form-group">
                            <input 
                                type="text"
                                name="price"
                                placeholder="Enter Price"
                                className="form-control"
                                value={price} 
                                onChange={e=>setPrice(e.target.value)}
                            />
                        </div>
                        <button type="submit"
                            className="btn btn-primary btn-sm btn-block">
                            Save Menu
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MenuForm;