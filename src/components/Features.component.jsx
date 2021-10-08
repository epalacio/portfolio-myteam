import iconFeature1 from '../img/icon-person.svg'
import iconFeature2 from '../img/icon-cog.svg'
import iconFeature3 from '../img/icon-chart.svg'
import featuresBg from '../img/featuresBg.svg'

const Features = () => {

    const featuresContent = [
        {
            'id': '1',
            'img': iconFeature1,
            'title': 'Experienced Individuals',
            'content': 'Our network is made up of highly experienced professionals who are passionate about what they do.'
        },
        {
            'id': '2',
            'img': iconFeature2,
            'title': 'Easy to Implement',
            'content': 'Our processes have been refined over years of implementation meaning our teams always deliver.'
        },
        {
            'id': '3',
            'img': iconFeature3,
            'title': 'Enhanced Productivity',
            'content': 'Our customized platform with in-built analytics helps you manage your distributed teams.'
        },
    ]
    return (
        <section className='bg-sacramentoGreen relative'>
            <img className='lg:block absolute right-0 top-0 -mr-32' src={featuresBg} alt="features background circle" />
            <div className="max-w-screen-xl mx-auto w-4/5 py-20">
                <div>
                    <hr className='block w-2/12 md:w-1/12 border-t-4 border-lightCoral pb-2'/>
                </div>
                <div className='flex flex-col lg:flex-row'>
                    <h2 className='text-white text-sectionMobile lg:text-sectionDesktop md:mr-4 mb-12 mt-4 md:mb-0 leading-tight'>Build & manage distributed teams like no one else.</h2>
                    <div>
                        {featuresContent.map(feature => (
                            <div key={feature.id} className='my-8 flex flex-col md:flex-row items-center justify-between text-center md:text-left'>
                                <img src={feature.img} alt={feature.title} className='min-w-featuresIcon'/>
                                <div className='md:ml-4'>
                                    <h3 className='text-lightCoral mb-2'>{feature.title}</h3>
                                    <p className='text-white'>{feature.content}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>  
    );
}
 
export default Features;