import React from 'react'
import { Navbar } from '../../components/Navbar/Navbar'
import { SignupForm } from '../../components/SignupForm/SignupForm'
import { Feature } from '../../components/Feature/Feature'
import "./LandingPage.css"

export const LandingPage = () => {
  return (
    <div>
        <Navbar/>
        
        <SignupForm/>

        <Feature/>
    </div>
  )
}
