// import { Router, Route } from "react-router-dom";
// import SplashScreen from "./components/SplashScreen";
// import Password from "./components/Password"
// function App(){
//   return(
//     <div className='app'>
//       <SplashScreen/>
//       {/* <Password/> */}

//     </div>
//   )
// }
// export default App; 
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import SplashScreen from './components/SplashScreen'; // Adjust the path based on your folder structure
import Password from './components/Password'; // Placeholder for the next component
import HomePage from './components/HomePage';
import ProfilePage from './components/ProfilePage';
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SplashScreen />} />
        <Route path="/Password" element={<Password />} />
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/profile/:id" element={<ProfilePage />} />
      </Routes>
    </Router>
  );
};

export default App;
