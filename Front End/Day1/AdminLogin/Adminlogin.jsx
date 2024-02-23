import React, { useState } from 'react';
import './Adminlogin.css'; // Import your CSS file
import { Link } from 'react-router-dom';

function LoginForm() {
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

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate password length
    if (password.length < 8) {
      setPasswordError(' 8 characters!');
    } else {
      // Proceed with form submission (Login logic)
      console.log('Logged in successfully');
    }
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
          <h1 className="form__title">Admin Login</h1>

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
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            {passwordError && <p className="error-message">{passwordError}</p>}
          </div>
          <a href="#" className="form__forgot">Forgot Password?</a>

          <Link to ='/adminside'><input type="submit" className="form__button" value="Login" /></Link>

          <div className="form__social">
            <Link to='/Signup'><span className="form__social-text">Don't have an account ? </span></Link>
          </div>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;
