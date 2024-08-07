import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Hasil() {
    const location = useLocation()
    const {nilai} = location.state || {nilai : 0}
    const [text, setText] = useState('')

    useEffect(() => {
        if (nilai >= 80) {
            setText("Anda Pintar, nilai anda sangat bagus")
        } else {
            setText("Anda bodoh Harus Mengulang")
        }
    }, [])

    return (
        <div className='w-full h-screen bg-bgColor100 flex items-center justify-center'>
            <div className='content h-60 flex flex-col gap-5 justify-center items-center font-poppins text-white'>
                <p className='text-lg bold font-inknut'>Nilai Anda</p>
                <div className='h-20 w-20 rounded-full border border-primary flex items-center justify-center'>
                    <p className=' font-bold text-xl'>
                        {nilai}
                    </p>
                </div>
                <p>
                    {text}
                </p>
                <Link to={'/quiz'}>
                    <button 
                        className='border-primary border hover:bg-primary2 h-10 w-20'>
                        Ulangi
                    </button>
                </Link>
            </div>
        </div>
    )
}
