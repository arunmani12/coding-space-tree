import React from 'react'
import classes from './login.module.css'

export default function Login() {
    return (
        <div className={classes.login}>
            <h1>Member Login Form</h1>
            <div className={classes.logindiv}>
                  <h2 className={classes.pink}>Login Here</h2>
                  <form>
                  
                          <label htmlFor='username'>username</label>
                          <div className={classes.textDiv}>
                          <i class="fas fa-user"></i>
                          <input id='username' placeholder='Username'></input>
                          </div>

                          <label htmlFor='password'>password</label>
                          <div className={classes.textDiv}>
                          <i class="fas fa-user"></i>
                          <input id='password' placeholder='Password'></input>
                          </div>

                          <div className={classes.forget}>
                          <a>Forgot Password?</a>
                          </div>

                           <button>Login</button>
                  
                  </form>
            </div>
        </div>
    )
}
