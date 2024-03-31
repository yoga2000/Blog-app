import React,{useEffect, useState} from 'react'

const useFetch = (url) => {

    const [data, setData] = useState(null)
    const[isLoading,setIsLoading]=useState(true)
    const[error,setError]=useState(null)
    useEffect(()=>{
        const controller= new AbortController()
        const signal=controller.signal

        setTimeout(()=>{fetch(url,{signal})
            .then(res=>{
              if(!res.ok){
                throw Error ("network response not ok")
              } 
              return res.json()
            })
            .then(data=>{
              setData(data);
              setIsLoading(false)
              setError(null)
            }
              )
            .catch(err=>{
                if(err.name==='AbortError'){
                    console.log("fetch aborted")
                }else{
                    setError(err.message)
                    setIsLoading(false)
                }               
            }
              )},1000)
              return ()=>controller.abort()
        
      },[])
   
  return (
      {data,isLoading,error}

  )
    
  
    
  
}

export default useFetch