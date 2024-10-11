import React, {useContext} from 'react';
import {Link, useParams} from "react-router-dom";
import {ProductContext} from "../contexts/ProductContext";
import {CartContext} from "../contexts/CartContext";
import {IoIosArrowRoundBack} from "react-icons/io";

const ProductDetails = (props) => {
    const {id} = useParams();
    const {products} = useContext(ProductContext);
    const {addToCart}= useContext(CartContext);

    const product = products.find((item)=>{
        return item.id === parseInt(id)
    })
    if (!product){
        return (
            <section
            className='h-screen flex justify-center items-center'
            >Loading... </section>
        )
    }
    const {title,description,image,price}=product;
    return (
        <section className="pt-32 lg:pb-12  lg:py-32 py-36 lg:h-screen lg:mx-40  items-center">
            <div className="container mx-auto flex flex-col lg:flex-row justify-center gap-6  items-center">
                <div className=''>
                    <img className='max-w-[200px] lg:max-w-xs' src={image} alt=""/>
                </div>
                <div className='flex-1 text-center lg:text-left'>
                    <Link to={'/'} className='flex gap-2 items-center mb-4 text-gray-500 font-bold '>
                        <IoIosArrowRoundBack className='text-xl text-red-600  cursor-pointer ' /> BACK
                    </Link>
                    <h1 className='text-[26px] font-medium mb-2 max-w-[450px]  mx-auto lg:mx-0'>{title}</h1>
                    <div className='text-xl text-red-500 font-medium mb-6'>$ {price}</div>
                    <p className='mb-8'>{description}</p>
                    <button
                        onClick={()=>addToCart(product,product.id)}
                    className='bg-primary py-4 px-8  text-white'
                    >Add To Cart</button>
                </div>
            </div>
        </section>
    );
};


export default ProductDetails;
