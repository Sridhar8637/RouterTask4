import React from 'react'
import{BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './Components/Home/home'
import Registerform from './Components/registerform/registerform'
import Loginform from './Components/LoginForm/loginform'
import Studdetails from './Components/Studdetail/studdetails'

const Rounting = () => {
  return (
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path='/register' element={<Registerform />} />
              <Route path='/login' element={<Loginform />} />
              <Route path='/studet' element={<Studdetails />} />
           </Routes>
      </BrowserRouter>
  )
}

export default Rounting