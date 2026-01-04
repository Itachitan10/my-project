import React, { useState } from 'react'
import { useEffect } from 'react'
import Finalmodal  from '../modal/finalmodal'
function Profile() {

    const [modal , setmodal ] = useState()
    console.log(modal);
    
  return (
    <div>
        <Finalmodal  success={modal} />
      <h1>hai</h1>
    </div>
  )
}

export default Profile
