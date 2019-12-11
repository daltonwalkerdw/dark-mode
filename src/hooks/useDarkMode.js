import React, {useState, useEffect} from 'react'


import { useLocalStorage } from "./useLocalStorage"

export const useDarkMode = () => {
 const [element, setElement] = useLocalStorage("enabled", false)
 
 useEffect(() => {
     const domBody = document.getElementsByTagName("body")[0]
   element ? domBody.classList.add("dark-mode") : domBody.classList.remove('dark-mode')
 }, [element])

 return [element, setElement]
}