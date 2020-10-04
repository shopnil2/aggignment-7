import React, { useState } from 'react';
import data from '../../Data/Data.json'
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Course.css';

const Course = () => {

    const first10 = data.slice(0,10);
    const [courses, setCourses] = useState(first10);
    const [cart, setcart] = useState([]);
    

    const handleAddProduct =(product) =>{
        console.log('product added',product);
        const newCart = [...cart, product];
        setcart(newCart)

    }
    console.log(cart, 'course')
    return (
        <div className="course-container">
            <div className="product-container">
                <ul>
                    {
                        courses.map(course => <Product
                        handleAddProduct = {handleAddProduct}
                             course={course}
                             ></Product>)
                    }
                    
                </ul>
                
            </div>
        <div className="cart-container">
                    <Cart cart={cart}></Cart>
        </div>
        </div>
    );
};

export default Course;