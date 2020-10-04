import React from 'react';
import './Producct.css'
const Product = (props) => {
    console.log(props);

    
    const {name, _id, price} = props.course;
    console.log(price)
    return (
        <div className="product">
        <div>
            <h1 className="product-name">{name}</h1>
            <br/>
            <p className="style">By: {_id}</p>
            <p>Taka:  {price}</p>
            <button className="main-button"
            onClick={() => props.handleAddProduct(props.course)}
            >Enroll Now</button>
        </div>
        </div>
    );
};

export default Product;