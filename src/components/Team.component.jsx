import nikita from '../img/avatar-nikita.jpg'
import christian from '../img/avatar-christian.jpg'
import cruz from '../img/avatar-cruz.jpg'
import drake from '../img/avatar-drake.jpg'
import griffin from '../img/avatar-griffin.jpg'
import aden from '../img/avatar-aden.jpg'
import cross from '../img/icon-cross.svg'


const Team = () => {
    const team = [
        {
            'id': '1',
            'imgUrl': nikita,
            'name': 'Nikita Marks',
            'position': 'Founder & CEO'
        },
        {
            'id': '2',
            'imgUrl': christian,
            'name': 'Cristian Duncan',
            'position': 'Co-founder & COO'
        },
        {
            'id': '3',
            'imgUrl': cruz,
            'name': 'Cruz Hamer',
            'position': 'Co-founder & CTO'
        },
        {
            'id': '4',
            'imgUrl': drake,
            'name': 'Drake Heaton',
            'position': 'Business Development Lead'
        },
        {
            'id': '5',
            'imgUrl': griffin,
            'name': 'Griffin Wise',
            'position': 'Lead Marketing'
        },
        {
            'id': '6',
            'imgUrl': aden,
            'name': 'Aden Allan',
            'position': 'Lead Development'
        },
    ]
    return (
        <div className='bg-jungleGreen lg:bg-aboutTeamBg bg-no-repeat'>
            <div className='max-w-screen-xl mx-auto text-center mt-12 py-12'>
                <h2 className='text-white text-sectionMobile lg:text-sectionDesktop md:mr-4 my-12 leading-tight'>Meet the directors</h2>
                <div className='flex flex-col md:flex-row flex-wrap'>
                    {team.map(member => (
                        <div className='bg-sacramentoGreen pt-6 pb-12 px-12 flex flex-col justify-center items-center mx-auto my-6 w-teamMobile m:w-teamTablet lg:w-teamDesktop relative' key={member.id}>
                            <img className='rounded-full border-white border-2 max-w-teamAvatars mb-4' src={member.imgUrl} alt={member.name} />
                            <h3 className='text-raptureBlue text-baseText'>{member.name}</h3>
                            <h4 className='text-white italic text-subtitle'>{member.position}</h4>
                            <img className='bg-lightCoral p-4 rounded-full absolute bottom-0 -mb-6 cursor-pointer' src={cross} alt='cross symbol' />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
 
export default Team;