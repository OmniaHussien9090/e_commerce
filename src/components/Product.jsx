import React, {useContext} from 'react';
import { BsEyeFill, BsPlus} from "react-icons/bs";
import {Link} from "react-router-dom";
import {MdAttachMoney} from "react-icons/md";
import {CartContext} from "../contexts/CartContext";

const Product = ({product}) => {
    const {addToCart} = useContext(CartContext);
    const {id, title, category, image, price} = product;
    return (
        <div className="Product">
            <div
                className='border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition'
            >
                <div className='w-full h-full flex justify-center items-center'>
                    <div className='w-[200px] mx-auto flex justify-center items-center'>
                        <img
                            className='max-h-[160px] group-hover:scale-110 transition duration-300 '
                            src={image} alt="product"/>
                    </div>
                </div>
                <div className='absolute top-3 -right-11 group-hover:right-3 bg-gray-100/40 p-2 flex flex-col justify-center items-center gap-2 opacity-0 group-hover:opacity-100 duration-300 transition-all '>
                    <button onClick={()=>addToCart(product,id)}>
                        <div className='flex justify-center items-center text-white w-12 h-12 bg-red-500 '>
                            <BsPlus className='text-3xl'  />
                        </div>
                    </button>
                    <Link
                        className='flex  w-12 h-12 justify-center items-center bg-white text-primary drop-shadow-xl'
                        to={`/product/${id}`}>
                        <BsEyeFill />
                    </Link>
                </div>
            </div>
            <div>
                <div className='text-sm text-gray-500 mb-1 capitalize'>{category}</div>
                <Link to={`/product/${id}`}>
                    <h2 className='font-semibold mb-1 text-red-900 hover:underline transition-all duration-500'>{title}</h2>
                </Link>
                <div className='font-semibold flex items-center'>
                    <MdAttachMoney className='text-green-800' />
                    {price}
                </div>
            </div>
        </div>
    );
};

export default Product;
