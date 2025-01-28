import React from 'react';
import {useEffect} from 'react';
import { useNavigate } from 'react-router-dom';
import './splashscreen.css'; // Incorrect import statement

// }
// import 'index.css'
import { BallTriangle } from 'react-loader-spinner'; // Correct import statement

function SplashScreen(){
    const navigate = useNavigate();

  useEffect(() => {
    // Redirect to the Password Page after 6 seconds
    const timer = setTimeout(() => {
      navigate('/password');
    }, 10000);

    // Cleanup the timer when the component unmounts
    return () => clearTimeout(timer);
  }, [navigate]);

    return(<div>
        <Logo/> 
        <Name/>
        <Message/>
    </div>)
}
// component fucking based software 
export default SplashScreen;
function Logo(){
    return(<div className='app-logo'>
        <img src="logo.png" alt="" />
    </div>)
}
function Name(){
    return(<div className='app-name'>
        <h1>Waqful Khairat Data</h1>
    </div>)
}
function Message(){
    return(<div className='app-message'>
        {/* <div className="content"><p>Please wait: While getting child information</p></div> */}
        <div className="loader">
            <BallTriangle
                height={80}
                width={100}
                radius={5}
                color="rgb(20, 102, 20)"
                ariaLabel="ball-triangle-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
            />
        </div>
    </div>)
}