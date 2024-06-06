import React,{useState} from 'react'

export default function useSidebar(){
    const [isCollapsed, setisCollapsed] = useState(false)
    const handleSidebar = () => {
        setisCollapsed((prev) => !prev)
      }
  return {
   isCollapsed,
   handleSidebar,
  }
}

