import avatarKady from '../img/avatar-kady.jpg'
import avatarAiysha from '../img/avatar-aiysha.jpg'
import avatarArthur from '../img/avatar-arthur.jpg'

const Stories = () => {
    const stories = [
        {
            'id': '1',
            'content': '“The team perfectly fit the specialized skill set required. They focused on the most essential features helping us launch the platform eight months faster than planned.”',
            'user': 'Kady Baker',
            'position': 'Product Manager at Bookmark',
            'img': avatarKady
        },
        {
            'id': '2',
            'content': '“We needed to automate our entire onboarding process. The team came in and built out the whole journey. Since going live, user retention has gone through the roof!”',
            'user': 'Aiysha Reese',
            'position': 'Founder of Manage',
            'img': avatarAiysha
        },
        {
            'id': '3',
            'content': '“Amazing. Our team helped us build an app that delivered a new experience for hiring a physio. The launch was an instant success with 100k downloads in the first month.”',
            'user': 'Arthur Clarke',
            'position': 'Co-founder of MyPhysio',
            'img': avatarArthur
        },
    ]
    return (
        <section className='text-white w-4/5 flex flex-col items-center justify-between py-48 max-w-screen-xl mx-auto'>
            <h2 className='text-white text-center text-sectionMobile lg:text-sectionDesktop mb-12 mt-4 leading-tight'>Delivering real results for top companies. Some of our <span className='text-raptureBlue'>success stories.</span></h2>
            <div className='flex flex-col lg:flex-row'>
                {stories.map(story => (
                    <div className='text-center px-4' key={story.id}>
                        <p className='pb-6 bg-iconQuote bg-no-repeat bg-top pt-8'>{story.content}</p>
                        <h4 className='text-raptureBlue text-baseText font-bold'>{story.user}</h4>
                        <h5 className='pb-4 italic'>{story.position}</h5>
                        <img className='rounded-full max-w-avatars mx-auto mb-12' src={story.img} alt={story.user} />
                    </div>
                ))}
            </div>
        </section>  
    );
}
 
export default Stories;