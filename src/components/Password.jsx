// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// function Password(){
    //     return(<div className='password'>
    //        <div className="container second">
//         <div><p>Kit Admin: <br /> Enter  your passkey here: </p></div>
//         <input type="password" />
//        </div> 
//        <div className="container third">
//         <button>Enter</button>
//        </div>
//     </div>)
// }
// export default Password;

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { BallTriangle } from 'react-loader-spinner'; // importing my loader here
import './password.css';

const PasswordPage = () => {
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState('');
  const [error, setError] = useState(false);
  
  const correctPassword = '0101';
  
  const handleSubmit = () => {
      if (inputValue === correctPassword) {
      // Navigate to the homepage if the password is correct
      navigate('/HomePage');
    } else {
        // Show error message if the password is incorrect
        setError(true);
    }
};

return (
    
    <div className="password-page">
                <div className="container first">
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
               <div className="container second">
                  <div><p><span id='admin'>Kit Admin:</span> <br /> Enter  your passkey here: </p></div>
                    <input type="password"
                    placeholder="4 Digit Password"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    className="password-input"
                    />
                </div> 
                <div className="container third">
                     <button onClick={handleSubmit} className='submit-button'>
                        Enter
                    </button>
                        {error && <ErrorMessage />}   
                </div>

    </div>
  );
};

// Error message component
const ErrorMessage = () => (
  <div className="error-message">
    <p><span id='wrong'> Wrong Password.</span> Please try again.</p>
  </div>
);

export default PasswordPage;
