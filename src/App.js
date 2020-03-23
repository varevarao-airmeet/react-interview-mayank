import React from 'react';
import logo from './logo.svg';
import './App.css';
import Auth from './context/Auth';
import UserCard from './components/UserCard';

// import useFakeConnection from './hooks/useFakeConnection';

function App() {
  const userCurrentStatus = React.useContext(Auth);
  const [status, setCurrentStatus] = React.useState(userCurrentStatus.status);

  // React.useEffect((mountFn) => {
  //   useFakeConnection();
  // }, []);

  return (
    <Auth.Provider value={{...userCurrentStatus, status, setCurrentStatus}}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            User <code>Status</code>
          </p>
          <UserCard />
        </header>
      </div>
    </Auth.Provider>
  );
}

export default App;
