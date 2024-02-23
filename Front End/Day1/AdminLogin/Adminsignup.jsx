import React, { useState } from 'react';
import './Adminsignup.css'; // Import your CSS file
import {Link} from 'react-router-dom';

function Signup() {
  const [usernameFocus, setUsernameFocus] = useState(false);
  const [passwordFocus, setPasswordFocus] = useState(false);

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

        <form action="" className="form__content">
          <h1 className="form__title">Admin Signup</h1>
          <div className={`form__div form__div-one ${usernameFocus ? 'focus' : ''}`}>
          <div className="form__icon">
            <i className='bx bx-user-circle'></i>
          </div>

          <div className="form__div-input">
            <label htmlFor="" className="form__label">UserName</label>
            <input
              type="text"
              className="form__input"
              onFocus={handleUsernameFocus}
              onBlur={handleUsernameBlur}
            />
          </div>
        </div>
          <div className={`form__div form__div-one ${usernameFocus ? 'focus' : ''}`}>
            <div className="form__icon">
              <i className='bx bx-user-circle'></i>
            </div>

            <div className="form__div-input">
              <label htmlFor="" className="form__label">E-mail</label>
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
              />
            </div>
          </div>
          <a href="#" className="form__forgot"></a>

          <Link to = '/login'><input type="submit" className="form__button" value="Sign up" /></Link>

          <div className="form__social">
          <Link to='/login'><span className="form__social-text">Have an account ?sign in </span></Link>

            
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signup;
