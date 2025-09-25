import React, { useEffect } from 'react'

const Two = () => {
    useEffect(() => {
        console.log("mount two");

        // unmount me return ka use hoga 
        // un mo hamaesha call hoga 
        // jab 2 hatega tab return call hoga

        return () => {
            console.log("Unmount two");
        }
    }, [])

    return (
        <div>two</div>
    )
}

export default Two