import { Routes, Route } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home.component';
import About from './pages/About/About.component';
import MakeCv from './pages/MakeCv/MakeCv.component';
// Components
import Navbar from './components/Navbar/Navbar.component';

function App() {
    return (
        <div className='App'>
            <Navbar />

            {/* Route */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='makecv' element={<MakeCv />} />
            </Routes>
        </div>
    );
}

export default App;
