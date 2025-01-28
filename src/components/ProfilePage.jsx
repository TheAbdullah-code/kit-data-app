import React from "react";
import { useParams } from "react-router-dom";
import "./profilepage.css";

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
    image: "https://via.placeholder.com/150",
    details: "A bright mind in Grade 6.",
  },
];

function ProfilePage() {
  const { id } = useParams();
  const user = users.find((user) => user.id === parseInt(id)); // Find user by ID

  if (!user) {
    return <h2>Person not found</h2>; // Handle invalid ID
  }
  return (
    <div className="profile-page">
      <Logo />
      <div className="head">
        <img src={user.image} alt={user.name} className="profile-image" />
        <h1>{user.name}</h1>
        <p>Kano State, Nigeria.</p>
      </div> 
      <div className="infos">
        <h3>Personal Information</h3>
        <div className="">
          <div className="info">
            <div className="title">Name:</div>
            <div className="desc">{user.name}</div>
          </div>
          <div className="info">
            <div className="title">Age:</div>
            <div className="desc">{user.age}</div>
          </div>
          <div className="info">
            <div className="title">Phone No:</div>
            <div className="desc">{user.phoneNo}</div>
          </div>
          <div className="info">
            <div className="title">Address:</div>
            <div className="desc">{user.address}</div>
          </div>
          <div className="info">
            <div className="title">State of Origin:</div>
            <div className="desc">{user.stateOfOrigin}</div>
          </div>
          <div className="info">
            <div className="title">Nationality:</div>
            <div className="desc">{user.nationality}</div>
          </div>
        </div>
        {/* <p>{user.details}</p>
        <p>{user.age}</p> */}
      </div>
    </div>
  );
}

export default ProfilePage;

function Logo() {
  return (
    <div className="logo">
      {/* <img src="/background.jpg" alt="" width={"100%"} /> */}
    </div>
  );
}
