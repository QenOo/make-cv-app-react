import { Routes, Route, Navigate } from 'react-router-dom';

// Pages
import Home from './pages/Home/Home.component';
import About from './pages/About/About.component';
import MakeCv from './pages/MakeCv/MakeCv.component';
import SignUp from './pages/SignUp/SignUp.component';
import SignIn from './pages/SignIn/SignIn.component';

// Components
import Navbar from './components/Navbar/Navbar.component';
import Footer from './components/Footer/Footer.component';

// auth State

function App() {
    const isLoggedIn = JSON.parse(localStorage.getItem('isLoggedIn'));
    const userInfo = JSON.parse(localStorage.getItem('UserInfo'));

    return (
        <div className='App'>
            <Navbar isLoggedIn={isLoggedIn} userInfo={userInfo} />

            {/* Route */}
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='about' element={<About />} />
                <Route path='makecv' element={<MakeCv />} />
                <Route path='*' element={<h1>404</h1>} />
                <Route
                    path='signin'
                    element={isLoggedIn ? <Navigate to='/' /> : <SignIn />}
                />
                <Route
                    path='signup'
                    element={isLoggedIn ? <Navigate to='/' /> : <SignUp />}
                />
            </Routes>
            {/* Route */}

            <Footer />
        </div>
    );
}

export default App;
