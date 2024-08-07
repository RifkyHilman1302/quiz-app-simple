import React, { useState } from 'react'
import { useUser } from '../providers/userContext'
import { Navigate, useNavigate } from 'react-router-dom'

export default function Pages() {
    const [usernameValue, setUsernameValue] = useState('')
    const {setUsername} = useUser()
    const navigate = useNavigate()

    function btnSubmit() {
        if(!usernameValue){
            alert("Masukan Nama Terlebih Dahulu")
        } else {
            setUsername(usernameValue)
            navigate('/quiz')
        }
    }

    return (
        <div className='w-full h-screen bg-bgColor100 flex items-center justify-center'>
            <div className='flex flex-col items-center gap-5'>
                <p className='text-white font-inknut'>
                    What Is Your Name
                </p>
                <input 
                    type="text" 
                    placeholder='Masukan Nama Anda'
                    className='w-80 h-10 indent-3 bg-transparent border border-bgColor200 rounded text-white focus:outline-none' 
                    value={usernameValue}
                    onChange={(e) => setUsernameValue(e.target.value)}
                />
                <button 
                    onClick={btnSubmit}
                    className='w-28 rounded h-10 border border-primary hover:bg-primary text-white'>
                    Submit
                </button>
            </div>
        </div>
    )
}
