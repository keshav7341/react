import React, { useEffect } from 'react'

const One= () =>{

    useEffect(()=>{
        console.log("mount one");
    },[])

    return(
        <div>One</div>
    )
}

export default One