import { useEffect, useState } from "react"

export default  function<T>(value: T, delay = 500){
     const [debounceValue,setDebounceValue]=useState(value)

    useEffect(() => {
        const timer = setTimeout(() => {
          
            setDebounceValue(value)
      },delay)
        
        return ()=>  clearTimeout(timer)
        
    }, [delay, debounceValue])
    return debounceValue
}