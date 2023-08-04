import React from 'react'
import Header from '../Header/Header'
import { Button } from '@material-tailwind/react'
import { Link } from 'react-router-dom'
const UserProfile = () => {
    
  return (
    <div>
        <Header></Header>
        <h1>UserProfile</h1>
       <Button ><Link to="/myappointments">Appointments</Link></Button>
       <Button><Link to="/reqappointed">Appointments Request</Link></Button>
    </div>
  )
}

export default UserProfile