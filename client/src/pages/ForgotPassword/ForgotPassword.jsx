import React, {useState} from 'react'
import { useSelector } from 'react-redux'
import './ForgotPassword.css'
import { sendEmail } from '../../actions/auth'

const ForgotPassword = () => {

    const user = useSelector((state) => state.usersReducer )
  const [email, setemail] = useState('')
  var currentProfile =null;


  const checkEmail = (e) => {
    e.preventDefault()
    if(!email){
        alert("Enter your email id.")
    }
    else{
        currentProfile = user.filter((user) => user.email === email)
        if(currentProfile.length === 0){
            alert("Email is not signed up")
        }
        else{
            alert("Link has been sent to your email id.")
            console.log(email)
            sendEmail(email)
        }
    }
  }
  return (
    <section className='forgpass-section'>
        <div className='forgpass-container'>
            <p>Forgot your account’s password? Enter your <br/>email address and we’ll send you a recovery <br/>link.</p>
            <form onSubmit={checkEmail}>
                <label htmlFor="email">
                    <h3>Email</h3>
                    <input type="text" name='email' id='email' onChange={(e) => {setemail(e.target.value)}}/>
                </label><br/>
                <button type='submit' className='submit-btn'>Send Recovery Link</button>
            </form>
        </div>
    </section>
  )
}

export default ForgotPassword