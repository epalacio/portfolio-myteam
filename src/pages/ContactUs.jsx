import iconFeature1 from '../img/icon-person.svg'
import iconFeature2 from '../img/icon-cog.svg'
import iconFeature3 from '../img/icon-chart.svg'
import Form from '../components/Form.component'

const ContactUs = () => {
    const features = [
        {
            'id': '1',
            'img': iconFeature1,
            'description': 'The quality of our talent network'
        },
        {
            'id': '2',
            'img': iconFeature2,
            'description': 'Usage & implementation of our software'
        },
        {
            'id': '3',
            'img': iconFeature3,
            'description': 'How we help drive innovation'
        },
    ]

    return (
        <section className='max-w-screen-xl mx-auto flex flex-col lg:flex-row items-center justify-between px-8'>
            <div className='flex flex-col justify-around items-center w-full'>
                <div className='text-center lg:text-left w-full mx-auto'>
                    <h1 className='text-white font-bold text-heroMobile md:text-heroTablet lg:text-heroDesktop leading-none mb-6 lg:mb-0 lg:mr-10 lg:w-7/12'>Contact</h1>
                    <h2 className='text-lightCoral text-sectionMobile mb-4'>Ask us about</h2>
                </div>
                <div className='flex flex-col items-center justify-between w-full mx-auto'>
                    {features.map(feature => (
                        <div className='flex flex-row text-white items-center justify-start w-full mx-auto my-2' key={feature.id}>
                            <img className='min-w-featuresIcon' src={feature.img} alt={feature.description} />
                            <p className='text-left ml-8'>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </div>
            <Form />
        </section>  
    );
}
 
export default ContactUs;