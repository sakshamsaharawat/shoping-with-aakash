import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
import Navigation from './cutomer/components/Navigation/Navigation';
import Footer from './cutomer/components/Footer/Footer';
import CustomerRouter from './Router/CustomerRouter';
import AdminRouter from './Router/AdminRouter';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div>
      {/* <Navigation />
      <ToastContainer /> */}
      <div>
      <Routes>
        <Route path="/*" element={<CustomerRouter />}></Route>
        <Route path="/admin/*" element={<AdminRouter/>}></Route>
        </Routes>
      </div>
      {/* <div className="mt-20">
        <Footer />
      </div> */}
    </div>
  );
}

export default App;
