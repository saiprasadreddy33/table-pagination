"use client"
import React,{createContext, useState, useContext} from "react";

const AppContext = createContext()
export const useAppContext = () =>  useContext(AppContext)


export const AppProvider = ({children})=>{
    const [isCollapsed, setisCollapsed] = useState(false)
    const [isModal,setisModal] = useState(false)
    const handleAddFilter = (e)=>{
        setisModal((prev)=>!prev)
    }
    const handleSidebar = () => {
        setisCollapsed((prev) => !prev)
    }
    if(globalThis && globalThis.innerWidth<=768){
        setisCollapsed(true)
    }
    
    return(
    <AppContext.Provider value={{
        isCollapsed,
        setisCollapsed,
        handleSidebar,
        isModal,
        setisModal,
        handleAddFilter,
        }}>
        {children}
    </AppContext.Provider>)
}

export default AppProvider
