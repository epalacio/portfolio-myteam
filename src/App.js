import Navbar from './components/Navbar.component';
import Home from './pages/Home'

const App = () => {
  return (
    <div className='App bg-midnightGreen h-screen w-screen'>
      <Navbar />
      <div className='max-w-screen-xl mx-auto'>
        <Home />
      </div>
    </div>
  );
}

export default App;
