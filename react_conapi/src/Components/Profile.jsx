import React, { useContext } from 'react'
import { UserContext } from '../Context/UserContext'

export const Profile = () => {
    const { user } = useContext(UserContext);

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <div className="bg-white p-6 rounded-xl shadow-md w-full max-w-md text-center">
                {
                    !user ? (
                        <p className="text-red-500 text-lg font-semibold">Please login</p>
                    ) : (
                        <div>
                            <h2 className="text-2xl font-bold mb-4">Profile</h2>
                            <p className="text-gray-700"><strong>Username:</strong> {user.userName}</p>
                            <p className="text-gray-700"><strong>Password:</strong> {user.password}</p>
                        </div>
                    )
                }
            </div>
        </div>
    )
}
