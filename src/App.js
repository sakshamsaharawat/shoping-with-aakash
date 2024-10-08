import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navigation from './cutomer/components/Navigation/Navigation';
import Footer from './cutomer/components/Footer/Footer';
import CustomerRouter from './Router/CustomerRouter';

function App() {
  return (
    <div>
      <Navigation />
      <ToastContainer />
      <div>
        <CustomerRouter />
      </div>
      <div className="mt-20">
        <Footer />
        
       
      </div>
    </div>
  );
}

export default App;
