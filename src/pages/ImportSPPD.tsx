import React from "react"

import { FiDownload } from 'react-icons/fi'

const ImportSPPD = () => {
    return (
        <>
            <header className='py-8 text-center'>
                <h1 className='text-6xl text-white font-normal mb-3'>Import SPPD</h1>
                <button className='bg-white py-2 px-3 rounded text-blue-700 shadow'><FiDownload className='inline-block mr-2' />Import</button>
            </header>

            <main className='container mx-auto'>
                <div className='bg-white shadow-md w-full h-40 rounded-lg mb-8'>
                </div>
                <div className='bg-white shadow-md w-full h-64 rounded-lg'>
                </div>
            </main>
        </>
    )
}

export default ImportSPPD