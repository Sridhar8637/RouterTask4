import React from 'react'
import './header.css'
import { Link} from 'react-router-dom'

const Header = () => {
  return (
      <div>
          <div id="nav">
              <h1>Student</h1>

                  <Link to='/register'><button className='butNav'>StudentDetail</button></Link>
            
              <div id="navBut"> 
                  <button className='butNav'>Login</button>
                  <button className='butNav'>Register</button>
              </div>
          </div>
          
     </div>
  )
}

export default Header

