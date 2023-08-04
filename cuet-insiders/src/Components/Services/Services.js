import React, { useState ,useEffect } from 'react';
import './Services.css';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import app from "../../firebase/firebase.init";
import { signOut } from "firebase/auth";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
const auth = getAuth(app);
const LogoutHandler = () => {
  signOut(auth).then().catch();
};

function Services() {

  return (
    <div>
     <div>
          <Header></Header>
      </div>
     <h1 className='text-4xl text-center font-bold mt-24'>Services</h1>
     <br /><br /><br /><br /><br /><br /><br /><br /><br />
     <Footer></Footer>
  </div>
  )
}

export default Services;