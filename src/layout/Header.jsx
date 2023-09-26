import React, { useState } from 'react'
import cook1 from '../asset/icon/cook1.svg'
import cook2 from '../asset/icon/cook2.svg'
import cook3 from '../asset/icon/cook3.svg'
import info from '../asset/icon/info.svg'
import login from '../asset/icon/log-in.svg'
import Pops from './pops/PopUp'
import { options, countries } from '../components/data/Data'
import LoginForm from './poplanguage/LoginForm'



function Header() {

  const [isLoginFormOpen, setIsLoginFormOpen] = useState(false);

  const openLoginForm = () => {
    setIsLoginFormOpen(true);
  };

  const closeLoginForm = () => {
    setIsLoginFormOpen(false);
  };


  return (
    <div>
      <nav className='container nav-bar'>
        <div className='space-btwn'>
          <div className='nav-head'>
            <h3>COOK</h3>
            <ul className='img-center'>
              <h1 className='vector'>|</h1>
              <li className='img-center'>
                <h5> <img src={cook1} alt="icon" />
                  Cooking Classes
                </h5>
                <h5> <img src={cook2} alt="icon" />
                  Become a Chef
                </h5>
                <h5> <img src={cook3} alt="icon" />
                  Group Cooking
                </h5>
              </li>
            </ul>
          </div>
          <div className='img-2' >
            <button className='img-4'>
              <Pops
                options={countries}
              />
            </button>
            <button className='img-4'>
              <Pops
                options={options}
              />
            </button>
            <div className='flex-dis'>
              <h1 className='vector'>|</h1>
              <img src={info} alt="info" />
              <h1 className='vector'>|</h1>
            </div>
            <button className='img-3' onClick={openLoginForm}>
              Log In
              <img src={login} alt="login" />
            </button>
            <LoginForm isOpen={isLoginFormOpen} onClose={closeLoginForm} />
          </div>
        </div>
      </nav>
    </div>

  )
}

export default Header