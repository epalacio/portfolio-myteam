import Hero from '../components/Hero.component'
import Features from '../components/Features.component'
import Stories from '../components/Stories.component';
import StartedBanner from '../components/StartedBanner.component';


const Home = () => {
    return (
        <div>
            <Hero />
            <Features />
            <Stories />
            <StartedBanner />
        </div>
    )
}
 
export default Home;