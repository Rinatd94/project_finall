import React from 'react'
import './page1.css'

const Login = () => {


    return (
        <>
        <label className='class' for='name'></label>
        <input id='name' type='text' placeholder='שם משתמש' />
<br />
        <label for='password'></label>
        <input id='password' type='text' placeholder='סיסמא' />
        <br />
<button>כניסה</button>
        </>
    )
}

export default Login