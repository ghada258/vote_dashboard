
import '../src/Styles/main.scss';
import {BrowserRouter as Router ,Routes ,Route}from 'react-router-dom';
import Dashboard from "./pages/Dashboard";
import Admin from "./pages/Admin";
import Addnews from "./pages/Addnews";
import Candidates from "./pages/Candidates";
import Profile from "./pages/Profile";
import Help from "./pages/Help";
import Manageevents from "./pages/Manageevents";
import Requests from "./pages/Requests";
import Sidebar from './Components/Sidebar';


function App() {
  return (
    <Router>
    <div className="App">
     <Sidebar />
     <Routes>
      <Route path='/' element={<Dashboard />}/>
      <Route path='/Admin' element={<Admin />}/>
      <Route path='/Addnews' element={<Addnews />}/>
      <Route path='/Candidates' element={<Candidates />}/>
      <Route path='/Help' element={<Help/>}/>
      <Route path='/Manageevents' element={<Manageevents />}/>
      <Route path='/Profile' element={<Profile />}/>
      <Route path='/Requests' element={<Requests />}/>
     </Routes>
    </div>
    </Router>
  );
}

export default App;
