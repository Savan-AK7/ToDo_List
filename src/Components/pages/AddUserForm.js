import React, { useState } from 'react'

const AddUserForm = props => {
	const initialFormState = { id: null, name: '', age: '' }
	const [ user, setUser ] = useState(initialFormState)

	const handleInputChange = event => {
		const { name, value } = event.target

		setUser({ ...user, [name]: value })
	}

	return (
		<form
			onSubmit={event => {
				event.preventDefault()
				if (!user.name || !user.age) return

				props.addUser(user)
				setUser(initialFormState)
			}}
		>
			
			<input type="text" name="name" value={user.name} onChange={handleInputChange} placeholder='Enter Name'/><br/> <br/>
			<input type="number" name="age" value={user.age} onChange={handleInputChange} placeholder='Enter Age'/> <br/><br/>
			<button className="btn btn-primary">Add</button>
		</form>
	)
}

export default AddUserForm