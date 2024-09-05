import React, {useContext } from 'react'
import './FoodItem.css'
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';

const FoodItem = (props) => {
    const {id, name, price, description, image} = props;
    const {cartItems, addTocart, removeFromCart} = useContext(StoreContext);

  return (
    <div className='food-item'>
        <div className="food-item-img-container">
            <img src={image} className='food-item-image' alt="" />
            {!cartItems[id] ? <img onClick={()=>addTocart(id)} src={assets.add_icon_green} className='add'/>
            :<div className='food-item-counter'>
              <img src={assets.remove_icon_red} alt="" onClick={() => removeFromCart(id)}/>
              <p>{cartItems[id]}</p>
              <img src={assets.add_icon_green} alt="" onClick={() => addTocart(id)}/>
            </div>}
        </div>
        <div className="food-item-info">
            <div className="food-item-name-rating">
                <p>{name}</p>
                <img src={assets.rating_starts} alt="" />
            </div>
            <p className="food-item-desc">{description}</p>
            <p className="food-item-price"> &#x20B9; {price}</p>
        </div>
      
    </div>
  )
}

export default FoodItem
