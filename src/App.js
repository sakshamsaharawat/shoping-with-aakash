import './App.css';
import Footer from './cutomer/components/Footer/Footer';
import Navigation from './cutomer/components/Navigation/Navigation';
import HomePage from './cutomer/components/pages/Homepage/HomePage';

function App() {
  return (
    <div className=''>
      <Navigation />
      <div>
        <HomePage />
      </div>
      <Footer />
    </div>
  );
}

export default App;
