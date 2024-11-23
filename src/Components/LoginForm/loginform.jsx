import React from 'react'
import './loginform.css'

const Loginform = () => {
  return (
      <div id="loginDiv">
          <h3 id='logintitle'>Login</h3>
          <form >
              <input type="text" placeholder='Enter UserName' className='loginform'/>
              <input type="text" placeholder='Enter Password' className='loginform' />
              <button id='loginBut'>Submit</button>
          </form>
     </div>
  )
}

export default Loginform

