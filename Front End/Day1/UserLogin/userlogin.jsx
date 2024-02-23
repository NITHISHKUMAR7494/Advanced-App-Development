import React, { useState } from 'react';
import './userlogin.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function UserLoginForm() {
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleUsernameFocus = () => {
    setUsernameFocus(true);
  };

  const handleUsernameBlur = (e) => {
    if (!e.target.value) {
      setUsernameFocus(false);
    }
  };

  const handlePasswordFocus = () => {
    setPasswordFocus(true);
  };

  const handlePasswordBlur = (e) => {
    if (!e.target.value) {
      setPasswordFocus(false);
    }
  };

  const handlePasswordChange = (e) => {
    const value = e.target.value;
    setPassword(value);
    if (value.length < 8) {
      setPasswordError('(8 characters!)');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
    <div className="l-form">
      <div className="shape1"></div>
      <div className="shape2"></div>

      <div className="form">
        <img
          src="https://raw.githubusercontent.com/bedimcode/responsive-login-form/eafbae66248bc27a0b1e26e2a5ddd2ad0d01956b/assets/img/authentication.svg"
          alt=""
          className="form__img"
        />

        <form onSubmit={handleSubmit} className="form__content">
          <h1 className="form__title">User Login</h1>
           
          <div className={`form__div form__div-one ${usernameFocus ? 'focus' : ''}`}>
            <div className="form__icon">
              <i className='bx bx-user-circle'></i>
            </div>

            <div className="form__div-input">
              <label htmlFor="" className="form__label">Username</label>
              <input
                type="text"
                className="form__input"
                onFocus={handleUsernameFocus}
                onBlur={handleUsernameBlur}
              />
            </div>
          </div>

          <div className={`form__div ${passwordFocus ? 'focus' : ''}`}>
            <div className="form__icon">
              <i className='bx bx-lock' ></i>
            </div>

            <div className="form__div-input">
              <label htmlFor="" className="form__label">Password</label>
              <input
                type="password"
                className="form__input"
                onFocus={handlePasswordFocus}
                onBlur={handlePasswordBlur}
                onChange={handlePasswordChange}
              />
            </div>
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <a href="#" className="form__forgot">Forgot Password?</a>

          <Link to = '/sidebar'><input type="submit" className="form__button" value="Login" /></Link>

          <div className="form__social">
            <Link to='/usersign'><span className="form__social-text">Don't have account ? </span></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default UserLoginForm;
