import React, {useContext, useEffect, useState} from 'react';
import {SidebarContext} from "../contexts/SidebarContext";
import {BsBag} from "react-icons/bs";
import {CartContext} from "../contexts/CartContext";
import {Link} from "react-router-dom";
import Logo from "../imgs/logo.svg"

const Header = () => {

    const [isActive,setIsActive]=useState(false);
    const {setIsOpen, isOpen} = useContext(SidebarContext);
    const {itemAmount}=useContext(CartContext);

    useEffect(() => {
        window.addEventListener('scroll',()=>{
            window.scrollY > 60 ? setIsActive(true) : setIsActive(false)
        })
    }, []);
    return (
        <header className={`${isActive ? 'bg-white' : 'bg-none py-4'}  fixed z-10 w-full transition-all duration-300 `}>
            <div className="flex justify-between items-center h-full mx-auto container">
                <Link to={'/'}>
                    <div>
                        <img className="w-[40px]" src={Logo} alt=""/>
                    </div>
                </Link>
                <div onClick={() => setIsOpen(!isOpen)} className='cursor-pointer flex relative '>
                    <BsBag className='text-2xl '/>
                    <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center '>
                        {itemAmount}
                    </div>
                </div>
            </div>
        </header>
    );
};


export default Header;
