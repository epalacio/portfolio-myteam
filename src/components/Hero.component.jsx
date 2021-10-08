import heroBg2 from '../img/heroBg2.svg'

const Hero = () => {
    return (
        
        <section className='bg-heroBg bg-bottom lg:bg-right-bottom bg-no-repeat text-center lg:text-left mx-auto w-4/5 flex flex-col lg:flex-row 
        items-center justify-between py-48'>
            <img className='hidden lg:block absolute left-0 -ml-32' src={heroBg2} alt="hero background circle" />
            <h1 className='text-white font-bold text-heroMobile md:text-heroTablet lg:text-heroDesktop leading-none mb-12 lg:mb-0 lg:mr-10 lg:w-7/12'>Find the best <span className='text-lightCoral'>talent</span></h1>
            <div className='lg:ml-10 lg:w-5/12'>
                <hr className='hidden lg:block w-1/12 border-t-4 border-raptureBlue pb-20'/>
                <p className='text-white font-semibold'>Finding the right people and building high performing teams can be hard. Most companies aren’t tapping into the abundance of global talent. We’re about to change that.</p>
            </div>
        </section>
    );
}
 
export default Hero;