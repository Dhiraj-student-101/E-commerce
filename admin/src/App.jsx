import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import { Routes, Route } from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = '$'

const App = () => {
    const [token, setToken] = useState(
        localStorage.getItem('token') ? localStorage.getItem('token') : ''
    )

    return (
        <div className="bg-gray-50 min-h-screen">
            <ToastContainer />

            {token === '' ? (
                <Login setToken={setToken} />
            ) : (
                <>
                    {/* Navbar */}
                    <Navbar setToken={setToken} />

                    {/* Light Border */}
                    <div className="border-t border-gray-200"></div>

                    {/* Main Layout */}
                    <div className="flex w-full">
                        <Sidebar />

                        <div className="flex-1 px-8 py-8 text-gray-600 text-base">
                            <Routes>
                                <Route path="/add" element={<Add token={token} />} />
                                <Route path="/list" element={<List token={token} />} />
                                <Route path="/orders" element={<Orders token={token} />} />
                            </Routes>
                        </div>
                    </div>
                </>
            )}
        </div>
    )
}

export default App