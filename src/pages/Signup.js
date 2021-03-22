import React, { useState } from 'react'
import SignUp from '../firebaseAuth/SignUp'

const Signup = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const handleEmail = (e) =>{
        setEmail(e.target.value)
    }
    const handlePassword = (e) =>{
        setPassword(e.target.value)
    }
    const handleSubmit = (e) =>{
        e.preventDefault()
        const {email} = setEmail 
        const {password} = setPassword
        SignUp()
    }

    return (
    <div onSubmit={ handleSubmit } className="min-h-screen bg-gray-200 flex flex-col justify-center">
        <div className="max-w-md w-full mx-auto"></div>
        <div className="text-center font-medium text-xl hover:text-green-700">Welcome Roomie</div>
        <div className="text-3xl font-bold text-gray-500 mt-2 text-center">Signup</div>
        <div className="max-w-md mx-auto mt-4 bg-white p-8 border border-gray-300">
            <form action="" className="space-y-6">
                <div>
                    <label htmlFor="" className="text-small font-bold text-gray-600 block" >Email</label>
                    <input className="w-full p-2 border border-gray-300 rounded mt-1"
                        onChange={ handleEmail }
                        type="email"
                        id="email"
                        name="email"
                        value={ email }
                    />
                </div>
                <div>
                    <label htmlFor="" className="text-small font-bold text-gray-600 block" >Password</label>
                    <input className="w-full p-2 border border-gray-300 rounded mt-1"
                        onChange={ handlePassword }
                        type="password"
                        id="password"
                        name="password"
                        value={ password }
                    />
                </div>
                <div>
                    <button className="w-full py-2 px4 bg-blue-600 hover:bg-blue-700 rounded-md text-white text-small " >Submit</button>
                </div>
            </form>
        </div>
    </div>
    )
};

export default Signup;