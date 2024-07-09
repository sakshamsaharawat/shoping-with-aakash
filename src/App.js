import './App.css';
import Navigation from './cutomer/components/Navigation/Navigation';
import HomePage from './cutomer/components/pages/Homepage/HomePage';

function App() {
  return (
    <div className=''>
      <Navigation />
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
