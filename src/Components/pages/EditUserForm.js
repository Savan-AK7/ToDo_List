import React, { useState, useEffect } from 'react'

const EditUserForm = props => {
  const [ user, setUser ] = useState(props.currentUser)

  useEffect(
    () => {
      setUser(props.currentUser)
    },
    [ props ]
  )

  
  // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

  const handleInputChange = event => {
    const { name, value } = event.target

    setUser({ ...user, [name]: value })
  }

  return (
    <form
      onSubmit={event => {
        event.preventDefault()

        props.updateUser(user.id, user)
      }} 
    >
      <label>Name : &nbsp;</label>
      <input type="text" className='input' name="name" value={user.name} onChange={handleInputChange} /><br/> <br/>
      <label>Age : &nbsp; </label>
      <input type="number"  className='input' name="age" value={user.age} onChange={handleInputChange} /> <br/> <br/>
      <button className="btn btn-info">Update Detail</button>&nbsp;
      <button onClick={() => props.setEditing(false)} className="btn btn-info">
        Cancel
      </button>
    </form>
  )
}

export default EditUserForm