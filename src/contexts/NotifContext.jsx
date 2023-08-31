import React, { createContext, useState } from 'react'


export const NotifContext = createContext()

const NotifProvider = ({children}) => {

    const [notif, setNotif] = useState(false)

    const handleNotif = () => {
        setNotif(!notif)
    }

    return (
        <NotifContext.Provider value={{ notif, setNotif, handleNotif }}>
            {children}
        </NotifContext.Provider>
    )
}

export default NotifProvider