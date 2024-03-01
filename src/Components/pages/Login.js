import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

export default function Login() {
	const navigate = useNavigate()
    const [user, setUser] = useState('');
	const [password, setPassword] = useState('');
    const [submitted, setSubmitted] = useState(false);
	const [error, setError] = useState(false);

    const handleUser = (e) => {
		setUser(e.target.value);
		setSubmitted(false);
	};

	const handlePassword = (e) => {
		setPassword(e.target.value);
		setSubmitted(false);
	};

    const handleSubmit = (e) => {
		e.preventDefault();
		if (user === '' || password === '') {
			setError(true);
		} else {
			localStorage.setItem('token',JSON.stringify(true))
			setSubmitted(true);
			setError(false);
			navigate('/')	
		}
    
	};

    // Showing success message
	const successMessage = () => {
		return (
		 	<div
				className="success"
				style={{
					display: submitted ? '' : 'none', 
				}}>
				<h1>User {user} successfully Login!!</h1>
			</div>
		);
	};

	const errorMessage = () => {
		return (
			<div
				className="error"
				style={{
					display: error ? '' : 'none',
				}}>
				<h4 style={{color:"red"}}>Please fill the detais !!</h4>
			</div>
		);
	};
    
  return (
    <div>
      <div>
				<h1>User Login</h1>
			</div>
            <div className="messages">
				{errorMessage()}
				{successMessage()}
			</div>
			<form>
				<input onChange={handleUser} className="input" value={user} type="text" placeholder='Enter Username'/>
                   <br/>
                   <br/>

				<input onChange={handlePassword} className="input" value={password} type="password" placeholder='Enter Password'/>
                     <br/>
					 <br/> 
				<button onClick={handleSubmit} className="btn btn-primary" type="submit"> Submit </button>
			</form>
    </div>
  )
}
