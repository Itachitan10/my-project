import React from 'react'
import { useState } from 'react'
const Process = () => {
    const [vals ,setvals ] = useState("christian")
    const val = { 
        christian  : 'sendin' , 
        torio : 'torio ' 

    }
    console.log(val[vals])
  return (
    <div>
      
    </div>
  )
}

export default Process
