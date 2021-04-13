import React, { useState } from 'react'
import './App.css';
import FilesView from './components/filesView';
import Header from './components/header';
import Sidebar from './components/sidebar';
import SideIcons from './components/sideIcons'
import GDriveLogo from './media/g-drive.png'
import { auth, provider } from './firebase'


function App() {

  const [user, setUser] = useState()
  const handleLogin = () => {
    if (!user) {
      auth.signInWithPopup(provider).then((result) => {
        setUser(result.user)
      })
    }
  }

  return (
    <div className="App">
      {
        user ? (
          <>
          <Header userPhoto={user.photoURL} />
          <div className="app__main">
            <Sidebar />
            <FilesView />
            <SideIcons />
          </div>
          </>
        ) : (
          <div className='app__login'>
            <img src={GDriveLogo} alt='Google Drive' />
            <button onClick={handleLogin}>Log in to Google Drive</button>
          </div>
        )
      }
    </div>
  );
}

export default App;
