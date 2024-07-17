import React from 'react'
import './Login.css'
import Twitter_icon from '../../Image/Twitter-icon.png'
import Cancel_icon from '../../Image/Cancel-icon.png'
import Apple_icon from '../../Image/Apple-icon.png'

const Login = () => {
  return (
    <div className="Login">
      <div className="first-part">
        <img src={Twitter_icon} alt="" />
      </div>
      <div className="second-part">
        <img src={Cancel_icon} alt="" />
      </div>
      <h3>Join X today</h3>
      <div className="third-part">
        <button>
          <img src={Apple_icon} alt="" /> Sign up with Apple
        </button>
      </div>
      <div className="underline">
        <hr />
        <p className="pag">or</p>
        <hr />
      </div>
      <div className="fouth-part">
        <button>Create account</button>
      </div>
      <div className="login-text">
        <p>
          By signing up, you agrre to the <a href="">Terms and Service</a> and <a href="">Privacy policy</a>,including <a href="">Cookies use</a>
        </p>
      </div>
      <div className="longin-text2">
        <p>Have an account already?<a href=''>Log in.</a></p>
      </div>
    </div>
  );
}

export default Login