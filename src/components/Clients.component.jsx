import verge from '../img/logo-the-verge.png'
import jakarta from '../img/logo-jakarta-post.png'
import guardian from '../img/logo-the-guardian.png'
import radar from '../img/logo-tech-radar.png'
import gadgets from '../img/logo-gadgets-now.png'

const Clients = () => {
    const clients = [
        verge,
        jakarta,
        guardian,
        radar,
        gadgets  
    ]

    return (
        <section className='bg-sacramentoGreen lg:bg-clientsBg bg-no-repeat'>
            <div className='max-w-screen-xl mx-auto text-center py-12'>
                <h2 className='text-white text-sectionMobile lg:text-sectionDesktop md:mr-4 my-12 leading-tight'>Some of our clients</h2>
                <div className='flex flex-col md:flex-row justify-around items-center'>
                    {clients.map(client => (
                        <div className="max-w-clients my-4">
                            <img className='max-w-clients' src={client} alt="" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
 
export default Clients;