import React, { useState } from 'react';
import Modal from 'react-modal';
import hero from '../../../cook-WebPage/asset/image/Hero Img-390px.png'
import CloseIcon from '@mui/icons-material/Close';


Modal.setAppElement('#root'); 

function LoginForm({ isOpen, onClose }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRefresh = () => {
    setUsername('');
    setPassword('');
  };
  

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Username:', username);
    console.log('Password:', password);
    onClose();
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} contentLabel="Login Form">
      <div className='head-form'>
        <div className='head-form-2'>
          <img src={hero} alt="justimage" />
        </div>
        <div className='head-form-1'>
          <form className='new-form' onSubmit={handleSubmit}>
            <h2>Login :</h2>
            <div className='new-form-1'>
              <label htmlFor="username">Username:</label>
              <input
                placeholder='Enter Your Name'
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
            <div className='new-form-1'>
              <label htmlFor="password">Password:</label>
              <input
                placeholder='Enter Your Password'
                type="password"
                id="password"
                value={password}
                onChange={handlePasswordChange}
              />
            </div>
            <div className='new-form-2'>
              <button type="submit">Login</button>
              <button type="button" onClick={handleRefresh}>Refresh</button>
            </div>
            <button className='close-btn' type="button" onClick={onClose}><CloseIcon/></button>
          </form>
        </div>
      </div>
    </Modal>
  );
}

export default LoginForm;
