import AboutHero from "../components/AboutHero.component";
import Team from "../components/Team.component";
import Clients from "../components/Clients.component";
import StartedBanner from "../components/StartedBanner.component";

const About = () => {
    return (
        <div>
            <AboutHero />
            <Team />
            <Clients />
            <StartedBanner />
        </div>  
    );
}
 
export default About;