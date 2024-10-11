import {createContext, useState} from "react";

export const SidebarContext = createContext();

const SidebarProvider = ({children})=>{
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [isOpen,setIsOpen] = useState(false);
    const handleClose = ()=>{
        setIsOpen(false)
    }
    return(
        <SidebarContext.Provider value={{isOpen,setIsOpen,handleClose}}>
            {children}
        </SidebarContext.Provider>
    )
}
export default SidebarProvider;