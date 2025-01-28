import React from 'react';
import { Link } from 'react-router-dom';
// import { Download } from '@mui/material'; // Importing the download icon from lucide-react
import './homepage.css';

const users = [
    {
      id: 1,
      name: "Abdullah Muhammad",
      age: "20",
      phoneNo:"09122562638",
      address:"Dorayi Karama",
      stateOfOrigin: "Kano State.",
      nationality: "Nigeria",
      image: "/abdullah.png",
    },
    {
      id: 2,
      name: "Fatima Muhammad",
      age: "18",
      phoneNo:"08122562638",
      address:"Gwammaja",
      stateOfOrigin: "Kano State.",
      nationality: "Nigeria",
      image: "/fatima.jpg",
    },
    {
      id: 3,
      name: "Sam Johnson",
      image: "sam.jpg",
      details: "Kano State, Nigeria.",
    },
    {
      id: 4,
      name: "Aisha Ali",
      image: "aisha.jpg",
      details: "Kano State, Nigeria.",
    },
    {
      id: 5,
      name: "John Doe",
      image: "john.jpg",
      details:"Kano State, Nigeria.",
    },


  ];
  
function HomePage() {
        return(
            <div className="home-page">
                <div className="header">
                        <div className=""><h1>Kit-Data</h1></div>
                        <div className=""><p>Dowanload the App</p></div>
                </div>
                        {/* <div className="logo"><img src="/background.jpg" alt="" width={'100%'} /></div> */}
                        <div className="buttom-container">
                            <div className="icons">
                                <div className="">Home</div>
                                <div className="">Profiles</div>
                                <div className="">Search</div>
                                <div className="">Menu</div>
                            </div>
                        </div>
                <div className="search-bar">
                    <div className="">
                        <input type="search"placeholder="Search child here"className="password-input"/>
                    </div>
                        <div className=""><button>Go</button> </div>
                    </div>
                        <div className="media">
                            {/* <video src="media.mp4" autoPlay controls  width={"100%"}></video> */}
                        </div>
                        <div className="user-list">
        {users.map((user) => (
          <User
            key={user.id}
            id={user.id}
            name={user.name}
            age={user.age}
            address={user.address}
            phoneNo={user.phoneNo}  
            stateOfOrigin={user.stateOfOrigin}
            nationality={user.nationality}
            image={user.image}
          />
        ))}
      </div>
            </div>
        )
}


function User({ id, name, age, address,  image, stateOfOrigin,  }) {
    return (
      <div className="user-card">
        <div className="card-d">
        <img src={image} alt={name} className="user-image" />
        </div>
        <div className="card-dtow">
        <h2>{name}</h2>
        <p>{stateOfOrigin}</p>
        <Link to={`/profile/${id}`} className="see-more-button">
          See More
        </Link> 
        </div>
      </div>
    );
  }

export default HomePage;


