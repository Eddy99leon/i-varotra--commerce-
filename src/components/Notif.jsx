import React from 'react'
import { AiOutlineCheckCircle } from 'react-icons/ai'
import { IoMdClose } from 'react-icons/io'
import { NotifContext } from '../contexts/NotifContext'
import { useContext } from 'react'



const Notif = () => {

    const { notif, handleNotif } = useContext(NotifContext)

    return (
        <div 
            className={`
                ${ notif ? 'top-6' : '-top-10'}
                fixed z-20 w-full flex justify-center pointer-events-none text-base text-black transition-all duration-300
            `}
        >
            <div className='flex justify-between items-center top-2 bg-lime-400 rounded-lg shadow py-1 px-2'>
                <div className='p-1 rounded-full mr-2'>
                    <AiOutlineCheckCircle />
                </div>
                <p className='font-semibold'>ajouté avec succès</p>
                <div onClick={handleNotif} className='ml-4 p-1 rounded-full cursor-pointer pointer-events-auto'>
                    <IoMdClose />
                </div>
            </div>
        </div>
    )
}

export default Notif