import { Fragment } from 'react';

import Hero from '../components/Hero.component'
import Features from '../components/Features.component'
import Stories from '../components/Stories.component';


const Home = () => {
    return (
        <Fragment>
            <Hero />
            <Features />
            <Stories />
        </Fragment>
    )
}
 
export default Home;