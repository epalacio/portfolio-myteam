const AboutHero = () => {
    return (
        <section className='bg-navMenu bg-right-bottom lg:bg-right-bottom bg-no-repeat text-center lg:text-left mx-auto w-4/5 flex flex-col lg:flex-row 
        items-center justify-between py-48 max-w-screen-xl '>
            {/* <img className='hidden lg:block absolute left-0 -ml-32' src={heroBg2} alt="hero background circle" /> */}
            <h1 className='text-white font-bold text-heroMobile md:text-heroTablet lg:text-heroDesktop leading-none mb-12 lg:mb-0 lg:mr-10 lg:w-7/12'>About</h1>
            <div className='lg:ml-10 lg:w-5/12'>
                <hr className='hidden lg:block w-1/12 border-t-4 border-lightCoral pb-20'/>
                <p className='text-white font-semibold pb-3'>We help companies build dynamic teams made up of top global talent. Using our network of passionate professionals we drive innovation and deliver incredible outcomes. Talented, diverse teams shape the best products and experiences. We’ll bring those teams to you.</p>
            </div>
        </section>
    );
}
 
export default AboutHero;