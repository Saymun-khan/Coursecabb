import { useContext } from 'react';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import HomepageDashboard from './components/pages/dashboard/HomepageDashboard';
import LeaderBoard from './components/pages/dashboard/leaderboard';
import UserProfile from './components/pages/dashboard/userProfile';
import AllExam from './components/pages/dashboardPages/AllExam';
import LiveExam from './components/pages/dashboardPages/LiveExam';
import Mocktest from './components/pages/dashboardPages/mocktest';
import Review from './components/pages/dashboardPages/review';
import Exam from './components/pages/exam/exam';
import ShowAnswer from './components/pages/exam/showAns';
import Home from "./components/pages/homePages/Home";
import Signin from './components/pages/homePages/Signin';
import Singup from './components/pages/homePages/Singup';
import Passsword from './components/pages/Profile/Passsword';
import Profile from './components/pages/Profile/Profile';
import ProfileHome from './components/pages/Profile/ProfileHome';
import Reffarels from './components/pages/Profile/Reffarels';
import Settings from './components/pages/Profile/Settings';
import Upgrade from './components/pages/Profile/Upgrade';
import Read from './components/read';
import { AuthContext } from './context/authContext';
import ProtectedRoutes from './protectedRoute';
function App() {
  const {user} = useContext(AuthContext)
  return (
    <div className="" style={{backgroundColor:'black' ,color:'white'}}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={user ? <HomepageDashboard /> : <Home />} />
        <Route path='/Signup' element={<Singup />} />
        <Route path='/Signin' element={user ? <Navigate replace to="/" /> : <Signin />} />
        <Route path='/userprofile' element={<UserProfile />} />
        <Route path='/leaderboard' element={<LeaderBoard />} />
        <Route path='/dashboard' element={
          <ProtectedRoutes>
            <HomepageDashboard />
          </ProtectedRoutes>} />
        <Route path='/mocktest' element={<Mocktest />} />
        <Route path='/review' element={<Review />} />
        <Route path='/liveexam' element={<LiveExam />} />
        <Route path='/allexam' element={<AllExam />} />
        <Route path='/profile' element={<ProfileHome />} />
        <Route path='/profilehome' element={<Profile />} />
        <Route path='/settings' element={<Settings />} />
        <Route path='/settings/password' element={<Passsword />} />
        <Route path='/settings/profile' element={<Settings />} />
        <Route path='/upgrade' element={<Upgrade />} />
        <Route path='/referals' element={<Reffarels />} />
        <Route path='/exam' element={<Exam />} />
        <Route path='/read' element={<Read />} />
        <Route path='/showans' element={<ShowAnswer />} />
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
