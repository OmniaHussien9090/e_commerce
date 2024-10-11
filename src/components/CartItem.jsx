import React, {useContext} from 'react';
import {Link} from "react-router-dom";
import {IoMdAdd, IoMdClose, IoMdRemove} from "react-icons/io";
import {CartContext} from "../contexts/CartContext";

const CartItem = ({item}) => {
    const {removeFromCart,increaseAmount,decreaseAmount}=useContext(CartContext)
    const {id, title, image, price, amount} = item;
    return (
        <div className="flex gap-x-4 border-b border-gray-200 py-2 pt-6  lg:px-6 w-full font-light text-gray-500">
            <div className='w-full min-h-[150px] flex item-center  gap-x-4'>
                    <Link to={`/product/${id}`}>
                        <img className='max-w-[80px]' src={image} alt="image"/>
                    </Link>
                    <div className='flex flex-col w-full'>
                        <div className='flex justify-between mb-2 my-8'>
                            <Link
                                className=' text-sm uppercase font-medium max-w-[240px] text-primary hover:underline'
                                to={`/product/${id}`}>
                                {title}
                            </Link>
                            <div className='text-xl cursor-pointer'>
                                <IoMdClose onClick={()=>removeFromCart(id)}
                                className='text-gray-500 hover:text-red-500 transition duration-300 '
                                />
                            </div>
                        </div>
                        <div className=' flex gap-x-4 h-[35px] text-sm '>
                            <div className='flex flex-1 max-w-[100px]  items-center h-full border text-primary font-medium'>
                                <div onClick={()=>decreaseAmount(id)}
                                     className='flex-1 h-full flex justify-center
                                     items-center cursor-pointer'>
                                    <IoMdRemove  />
                                </div>
                                <div className='h-full flex items-center justify-center px-2'>
                                    {amount}
                                </div>
                                <div onClick={()=>increaseAmount(id)} className='flex-1 h-full flex justify-center items-center cursor-pointer'>
                                    <IoMdAdd />
                                </div>
                            </div>
                            <div
                            className='flex-1 flex items-center justify-start'
                            >
                                $ {price}</div>
                            <div
                            className='flex-1 justify-end text-primary font-medium flex items-center'
                            >
                                {`$ ${parseFloat(price * amount).toFixed(2)}`}</div>
                        </div>
                    </div>
            </div>
        </div>
    );
};


export default CartItem;
