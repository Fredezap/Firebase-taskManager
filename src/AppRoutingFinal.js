import { BrowserRouter as Router, Route, Routes, Link, Navigate, useParams, useNavigate } from 'react-router-dom';
import DashBoardPage from './pages/dashboard/DashBoardPage';
import LoginFormik from './components/pure/forms/loginFormik';
import MenuListItems from './components/pure/MenuListItems';
import RegisterFormik from './components/pure/forms/registerFormik';
import TaskListComponent from './components/container/TaskListComponent';
import { useState } from 'react';
import Updater from './components/sw/Updater';
import './App.css'
import Copyright from './components/pure/Copyright';
import Settings from './components/pure/Settings.jsx';
import { motion, AnimatePresence } from "framer-motion"


function AppRoutingFinal() {

  // TODO: Add logic to get logged in and out
  let [LoggedIn, setLogInOut] = useState(true);

  const LogginInAndOut = () => {
    LoggedIn ?
    setLogInOut(LoggedIn=false)
    :
    setLogInOut(LoggedIn=true)
  }

  const [Appmode, setAppMode] = useState(false)
  const [showSettings, setShowsettings] = useState(false)

  const toggleMode = () => {
    setAppMode(!Appmode);
    console.log(Appmode)
  }

  const massage = true;

    return (
      <div className={`${Appmode ? 'AppDark ' : 'App'}`}>
        <div className='Header-box'>
          <h1 className='Page-header'>Task administrator v2.2</h1>
          <motion.button
            whileHover={{scale: 1.1}}
            className='settings-button btn btn-info'
            onClick={ () => setShowsettings(!showSettings)}
            >
          {showSettings
            ? "Hide settings"
            : "Show settings"
          }
          </motion.button>
        </div>
        <Router>
          <Routes>
            <Route exact path="/" element={<DashBoardPage LoggedIn={LoggedIn} logInOut={LogginInAndOut} />} />
            <Route exact path='/login' element={<LoginFormik logInOut={LogginInAndOut}/>} />
            <Route exact path="/dashboard" element={<DashBoardPage LoggedIn={LoggedIn} logInOut={LogginInAndOut}/>} />
            <Route exact path="/register" element={<RegisterFormik />} />
            <Route path="/tasks" element={LoggedIn ? <TaskListComponent /> : <LoginFormik logInOut={LogginInAndOut} massage={massage}/>} />
          </Routes>
          <Updater />
        </Router>
        <footer className='footer'>
        <div className='copyright'>
        <Copyright />
        </div>
        </footer>
          <AnimatePresence
            initial={false}
            mode="wait"
            onExitComplete={() => null}>
          {showSettings && (
            <motion.div
            initial={{ y: '100vh' }}
            animate={{ y: '0' }}
            exit={{ y: '100vh' }}
          >
          <Settings AppMode={Appmode} toggleMode={toggleMode}/>
          </motion.div>
          )}
          </AnimatePresence>
      </div>
    );
  }

export default AppRoutingFinal;
