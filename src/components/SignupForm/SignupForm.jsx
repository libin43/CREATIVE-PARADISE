import React from 'react'
import signupBg from "../../assets/Motion Background.svg"
import curveBg from "../../assets/Curve Motion.svg"
import "./SignupForm.css"

export const SignupForm = () => {
    return (
        <div className="signup-container">
<div className="signup-title-container">
<div className="signup-title">
                <span className="main-title">A Creator's Paradise</span>
                <span className="sub-title">Were Creativity Meets Success</span>
            </div>
</div>
            <div className="signup-form-container">
            <div className="signup-form">
                <div className="google-signup">
                    <img src="https://play-lh.googleusercontent.com/aFWiT2lTa9CYBpyPjfgfNHd0r5puwKRGj2rHpdPTNrz2N9LXgN_MbLjePd1OTc0E8Rl1=w240-h480-rw" alt="" />
                    <button className="google-signup-btn">Continue With Google</button>
                </div>
                <hr />
                <div className="name">
                        <input type="text" className="first-name" placeholder="First Name*" />
                    {/* <div className="first-name">
                    </div> */}
                        <input type="text" className="last-name" placeholder="Last Name*" />
                    {/* <div className="lastname">
                    </div> */}
                </div>
                <div className="email">
                    <input type="text" className="email-input" placeholder="Email*" />
                </div>
                <div className="password">
                    <input type="text" className="password-input" placeholder="Password*"/>
                </div>
                <div className="timezone">
                    <span>GMT + 05:30 India Standard Time - Calcutta</span>
                </div>
                <div className="user-signup">
                    <button>Signup as a user</button>
                </div>
                <div className="terms">
                    <span>By signing up you agree to our Term & Conditions and Privacy
                        Policy and confirm that you are at least 18 years old.
                    </span>
                </div>
                <hr />
                <div className="creator-signup">
                    <button>Signup as a creator</button>
                </div>
                <div className="already-login">
                    Already have an account? <a href="">Login</a>
                </div>
            </div>
            </div>
            <div className="signup-vector">
                {/* <img src={curveBg} alt="" /> */}
            </div>
            {/* <div className="signup-background">
                <img src={signupBg} alt="" />
            </div> */}
        </div>
    )
}
