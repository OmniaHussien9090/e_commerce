import React, { useContext } from 'react';
import { SidebarContext } from "../contexts/SidebarContext";
import { IoMdArrowForward } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";
import CartItem from "./CartItem";
import { FiTrash2 } from "react-icons/fi";
import {Link} from "react-router-dom";

const Sidebar = () => {
    const { cart, clearCart, total ,itemAmount } = useContext(CartContext);
    const { isOpen, handleClose } = useContext(SidebarContext);

    return (
        <div
            className={`${isOpen ? 'right-0' : '-right-full'}
             w-full fixed top-0 h-full shadow-2xl md:w-[35vw] xl:max-w-[30vw] transition-all
              duration-500 z-20 px-4 lg:px-[35px] bg-white flex flex-col`}>
            <div className='flex items-center justify-between py-6 border-b'>
                <div className='uppercase text-sm font-semibold'>Shopping ({itemAmount})</div>
                <div onClick={handleClose} className='h-8 w-8 flex items-center justify-center cursor-pointer'>
                    <IoMdArrowForward className='text-2xl' />
                </div>
            </div>
            <div className="flex-grow overflow-y-auto overflow-x-hidden">
                {cart.map((item) => {
                    return (
                        <CartItem item={item} key={item.id} />
                    );
                })}
            </div>
            <div className='flex-shrink-0 flex flex-col gap-y-3 py-4 mt-4'>
                <div className='flex w-full justify-between items-center'>
                    <div className='font-semibold uppercase'>
                        <span className='mr-2 text-green-700'>Total:</span>
                        $ {parseFloat(total).toFixed(2)}
                    </div>
                    <div onClick={clearCart} className='rounded w-12 h-12 bg-red-500 text-white cursor-pointer text-xl flex items-center justify-center'>
                        <FiTrash2 />
                    </div>
                </div>
                <Link
                to={'/'}
                className='bg-gray-200 flex justify-center p-4 items-center text-primary w-full font-medium hover:bg-gray-300 transition duration-300'
                >View Cart</Link>
                <Link
                    to={'/'}
                    className='bg-primary flex justify-center p-4 items-center text-white w-full font-medium '
                >Checkout</Link>
            </div>
        </div>
    );
};

export default Sidebar;
