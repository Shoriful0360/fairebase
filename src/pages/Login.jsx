
import { signInWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import { auth } from '../fairbase.init';
import { IoEye } from 'react-icons/io5';
import { GoEyeClosed } from "react-icons/go";

const Login = () => {

    const [error, setError] = useState('')
        const [successLogin, setSuccessLogin] = useState(false)
        const [showPassword,setShowPassword]=useState(false)
        console.log(showPassword)


    const handleLogin = (e) => {
        e.preventDefault()
        const email = e.target.email.value
        const password = e.target.password.value

        
        setSuccessLogin(false)
        setError('')




        signInWithEmailAndPassword(auth, email, password)

            .then((result) => {
                setSuccessLogin(result.user)
              
            })
            .catch((error) => {
                setError('Invalid your password and email')
                setSuccessLogin(false)
                
            })

    }
    return (
        <div className="hero bg-base-200 mt-10">
            <div className="hero-content w-8/12 flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <h1 className="text-5xl font-bold">Login now!</h1>
                    <p className="py-6">
                        Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem
                        quasi. In deleniti eaque aut repudiandae et a id nisi.
                    </p>
                </div>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleLogin} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" placeholder="email" name='email' className="input input-bordered" required />
                        </div>
                        <div className="form-control relative">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type={showPassword ?'text': 'password'} placeholder="password" name='password' className="input input-bordered" required />
                            <label className="label">
                                {
                                    showPassword ? <button type='button' onClick={()=>setShowPassword(false)} className='absolute right-2 top-[50px]'><GoEyeClosed/></button>
                                    :
                                    <button type='button' onClick={()=>setShowPassword(true)} className='absolute right-2 top-[50px]'><IoEye></IoEye></button>
                                }
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        {
                            successLogin && <p className='text-lg font-bold text-green-700'>Login is Successfully</p>
                        }
                        {
                            error && <p className='text-xl text-red-700 font-bold'>{error}</p>
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

export default Login;