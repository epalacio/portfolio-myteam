const StartedBanner = () => {
    return (
        <section className='flex flex-col md:flex-row mx-auto bg-lightCoral justify-around items-center py-16 bg-startedBg bg-no-repeat bg-left-bottom'>
            <h2 className='text-sacramentoGreen text-center text-sectionMobile lg:text-sectionDesktop leading-tight mb-8 md:mb-0'>Ready to get started?</h2>
            <div>
            <a href='/' className='text-sacramentoGreen hover:bg-white px-4 py-2 text-baseText font-semibold rounded-full border-2 border-sacramentoGreen hover:border-white'>contact us</a>
            </div>
        </section>  
    );
}
 
export default StartedBanner;