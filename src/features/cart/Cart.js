import React, {} from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { deleteAsync ,updateAsync} from './cartSlice';
import './Cart.css';

export function Cart() {

  
  const items = useSelector(state => state.cart.items);
  const dispatch=useDispatch();

  const handleChange=(e,id)=>{
    console.log(e.target.value);
    dispatch(updateAsync({id,change:{quantity:+e.target.value}}));//+ so that it changes to integer from string

  }


  return (
    <div>
      <div className="">

        {items.map((item) => (

          <div className="cart-item">
            <img className="img-fluid" src={item.thumbnail} alt="" />
            <div className="description">
              <p>{item.title}</p>
              <span>{item.brand}</span>
              <strong>${item.price}</strong>
            </div>
            <div className="quantity">
              Quantity
              <select value={item.quantity} onChange={(e)=>handleChange(e,item.id)}>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
              </select>
            </div>
            <div className="close">
              <button onClick={()=>dispatch(deleteAsync(item))}>X</button>
            </div>
          </div>

        ))}
      </div>
      {/* keep adding price*quantity in the acc, item is the iterator as usaual */}
     

      <h1>Total:{items.reduce((acc,item)=>item.price*item.quantity+acc,0)}</h1> 
    </div>
  );
}
