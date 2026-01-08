import React from 'react'
import "@/app/globals.css"

const LoginPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-100">
            <fieldset className="fieldset border w-75 bg-base-200 p-5 rounded-box shadow-md">
                <legend className="fieldset-legend text-xl">Login</legend>

                <label className="label">Username</label>
                <input type="Username" className="input" required placeholder="Username" />

                <label className="label">Password</label>
                <input type="password" className="input" required placeholder="Password" />

                <div className="flex items-center justify-center">
                    <button className="btn btn-primary w-50">Login</button>
                </div>
            </fieldset>
        </div>
    )
}
export default LoginPage
