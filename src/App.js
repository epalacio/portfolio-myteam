import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'

import Navbar from './components/Navbar.component';
import Home from './pages/Home'
import About from './pages/About';
import ContactUs from './pages/ContactUs'
import Footer from './components/Footer.component';

const App = () => {
  return (
    <Router>
    <div className='App bg-midnightGreen h-screen w-screen'>
      <Navbar />
      <div className='mx-auto'>
        <Switch>
          <Route exact path='/'>
            <Home/>
          </Route>
          <Route path='/contactUs'>
            <ContactUs/>
          </Route>
          <Route path='/about'>
            <About />
          </Route>    
        </Switch>
      </div>
      <Footer />
    </div>
    </Router>
  );
}

export default App;
