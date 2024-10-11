import React, {useContext, useRef} from 'react';
import WomanImg from "../imgs/woman_hero.png";
import { Link } from "react-router-dom";
import { FaArrowTrendDown } from "react-icons/fa6";
const Hero = (props) => {


    return (
        <>
            <section  className=" h-[800px] bg-hero bg-cover bg-center bg-no-repeat py-24">
                <div className="container mx-auto flex justify-around h-full">
                    <div className='flex flex-col justify-center'>
                        <div className='font-semibold flex items-center uppercase text-gray-500'>
                            <div className='w-10 h-[2px] bg-red-500 mr-3'></div>New Trend
                        </div>
                        <h1 className='uppercase text-[70px] leading-[1.1] font-light mb-4'>
                            autumn sale stylish <br />
                            <span className='font-semibold'>Women</span>
                        </h1>
                        <Link
                            to="#"
                            className="self-start font-semibold border-primary flex gap-2 items-center hover:text-red-500 hover:scale-105 transition-transform duration-300 ease-in-out"
                        >
                            Discover More
                            <FaArrowTrendDown className='text-red-500 text-2xl transition-transform duration-300 ease-in-out hover:translate-x-1' />
                        </Link>
                    </div>
                    <div>
                        <img className="hidden lg:block" src={WomanImg} alt="woman" />
                    </div>
                </div>
            </section>
        </>
    );
};

export default Hero;
