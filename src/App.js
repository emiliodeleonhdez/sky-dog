//styles
import './App.scss';

//imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import LandingPage from './pages/Landing/LandingPage';
import AboutMe from './pages/About me/AboutMe';
import PrimaryHeader from './components/Header/PrimaryHeader';
import PrimaryFooter from './components/Footer/PrimaryFooter';
import NotFound from './pages/404/NotFound';
import Products from './pages/Products/Products';
import Login from './pages/Login/Login';
import PaymentOk from './pages/PaymentOk/PaymentOk';

function App() {
    const showLogin = false
    return (
        <>
        {showLogin ? <Login /> : 
            <BrowserRouter>
                <PrimaryHeader />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/login" element={<NotFound />} />
                    <Route path="/about" element={<NotFound />} />
                    <Route path="/services" element={<NotFound />} />
                    <Route path="/notfound" element={<NotFound />} />
                    <Route path="/paymentok" element={<NotFound />} />

                </Routes>
                <PrimaryFooter />
            </BrowserRouter>
            }
        </>
    );
}

export default App;
