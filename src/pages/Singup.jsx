
import { createUserWithEmailAndPassword, sendEmailVerification, updateProfile } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../fairbase.init';
import { IoEye } from 'react-icons/io5';
import { GoEyeClosed } from "react-icons/go";

const Singup = () => {
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleSubmitForm = (event) => {
    event.preventDefault()
    const name=event.target.name.value
    const photo=event.target.photo.value
    const email = event.target.email.value
    const password = event.target.password.value
    const checkbox=event.target.terms.checked
    console.log(email,password,name,photo)
    // create a email and password metho start
    setSuccess(false)

    // strong password vaidation

if(!checkbox){
  setError('accepted our terms and conditon')
  return;
}

    if (password.length < 6) {
      setError('password should be 6 character or more')
      return;
    }
    const strongPasswordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    if (!strongPasswordRegex.test(password)) {
      setError('at least one uppercase,one lowercase,one number, one special character')
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
  
        setSuccess(true)
        setError('')

        sendEmailVerification(auth.currentUser)
        .then(()=>{
          console.log('veriry email send')
        })

      })
      // update profile start
      const profile={
      displayName:name,
      photoURL:photo
      }
      updateProfile(auth.currentUser,profile)
      .then(()=>{

      })
      .catch(()=>{

      })
      // updae profile end

      .catch(error => {
        console.log('error', error.message)
        setError(error.message)
        setSuccess(false)

      })
    // create a email and password metho end

  }
  return (
    <div className="hero bg-green-900 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">

        <div className="card bg-red-950 w-full max-w-sm shrink-0 shadow-2xl">
          <form onSubmit={handleSubmitForm} className="card-body">
            <div className="form-control">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" name='photo' placeholder="Photo url" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="email" name='email' placeholder="email" className="input input-bordered" required />
            </div>
            <div className="form-control relative">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input type={showPassword ? 'text' : 'password'} name='password' placeholder="password" className="input input-bordered" required />
              {
                showPassword ? <button onClick={() => setShowPassword(!showPassword)} className='absolute right-2 top-[52px]'><GoEyeClosed></GoEyeClosed></button>
                  :
                  <button onClick={() => setShowPassword(!showPassword)} className='absolute right-2 top-[52px]'><IoEye></IoEye></button>
              }

              <label className="label">
                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
              </label>
            </div>
            {/* check box icon start */}
            <div className="form-control">
              <label className="label cursor-pointer justify-start gap-2">
                <input type="checkbox" defaultChecked name='terms' className="checkbox" />
                <span className="label-text">Accepted our terms and condition</span>
              </label>
            </div>
            {/* check box icon end */}

            {
              error &&
              <p className='text-xl font-bold text-red-600'>{error}</p>
            }
            {
              success && <p className='text-green-700 text-lg font-bold'>SignUp successfully</p>
            }
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Singup;