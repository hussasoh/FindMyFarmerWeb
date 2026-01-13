import React from 'react'
import "@/app/globals.css"

const LoginPage = () => {
    return (
        <div className="flex-1 flex items-center justify-center bg-base-100">
            <fieldset className="fieldset border w-2/5 bg-base-200 p-5 rounded-box shadow-md">
                <legend className="fieldset-legend text-xl">Login</legend>

                <label className="label">Username</label>
                <input type="Username" className="input w-full" required placeholder="Username" />

                <label className="label">Password</label>
                <input type="password" className="input w-full" required placeholder="Password" />

                <div className="flex items-center justify-center">
                    <button className="btn btn-primary w-50">Login</button>
                </div>
            </fieldset>
        </div>
    )
}
export default LoginPage
