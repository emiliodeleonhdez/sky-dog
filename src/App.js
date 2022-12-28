//styles
import './App.scss';

//imports
import { BrowserRouter, Routes, Route } from 'react-router-dom';

//pages
import LandingPage from './pages/Landing/LandingPage';
import AboutMe from './pages/About me/AboutMe';

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path='/' element={<LandingPage />}/>
                    <Route path='/about' element={<AboutMe />}/>
                </Routes>
            </BrowserRouter>
        </div>
    );
}

export default App;
