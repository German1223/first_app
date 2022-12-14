import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Notfound from './components/NFpage/Notdound';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';

const App = (props) => {

  return (
    <BrowserRouter>
      <div className='app-wrapper'>
        <Header />
        <Navbar />
        <div className='app-wrapper-content'>
          <Routes>
            <Route path='/profile/:userId' element={<ProfileContainer/>}/>
            <Route path='/profile' element={<ProfileContainer/>}/>
            <Route path="/dialogs" element={<DialogsContainer />} />
            <Route path="/users" element={<UsersContainer />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </div>

      </div>

    </BrowserRouter>


  )
}

export default App;
