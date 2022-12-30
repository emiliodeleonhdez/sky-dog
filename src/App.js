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

function App() {
    return (
        <>
            <BrowserRouter>
                <PrimaryHeader />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/about" element={<AboutMe />} />
                    <Route path="/products" element={<NotFound />} />
                    <Route path="/notfound" element={<NotFound />} />
                </Routes>
                <PrimaryFooter />
            </BrowserRouter>
        </>
    );
}

export default App;
