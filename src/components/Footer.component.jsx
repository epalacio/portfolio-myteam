import { Link } from 'react-router-dom'

import logo from '../img/logo.svg'
import facebook from '../img/icon-facebook.svg'
import pinterest from '../img/icon-pinterest.svg'
import twitter from '../img/icon-twitter.svg'

const Footer = () => {
    return (
        <section className='bg-darkGreen'>
            <div className='max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center py-12 px-16'>
                <div className='flex flex-col md:flex-row justify-between'>
                    <div className='text-white md:mr-12'>
                        <img  className='mb-8 md:mb-0' src={logo} alt="" />
                        <div className='flex flex-row justify-center md:justify-start mb-8 md:mb-0'>
                            <Link className='mr-6  hover:text-lightCoral' exact path='/'>home</Link>
                            <Link className='ml-6  hover:text-lightCoral' path='/about'>about</Link>
                        </div>
                    </div>
                    <div className='text-towerGray text-center md:text-left md:ml-12 mb-8 md:mb-0'>
                        <p className='my-2'>987 Hillcrest Lane</p>
                        <p className='my-2'>Irvine, CA</p>
                        <p className='my-2'>California 92714</p>
                        <p className='my-2'>Call Us: 949-833-7432</p>
                    </div>
                </div>
                <div>
                    <div className='flex flex-row justify-center md:justify-end mb-4 md:mb-12'>
                        <a href="/"><img src={facebook} alt='facebook logo' /></a>
                        <a href="/"><img className='mx-8' src={pinterest} alt='pinterest logo' /></a>
                        <a href="/"><img src={twitter} alt='twitter logo' /></a>
                    </div>
                    <p className='text-towerGray'>Copyright 2021. All Rights Reserved</p>
                </div>
            </div>
        </section>  
    );
}
 
export default Footer;