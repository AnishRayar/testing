import React, { useState } from 'react'

const App = () => {
  const [name,setName] = useState('')

  const handleChange = (e) =>{
    setName(e.target.value)
  }

  return (
    <div>
       <input
       name='name'
       value={name}
       onChange={(e)=>{handleChange(e)}}
       />
        <button>ToCheckNewCommands</button>
    </div>
  )
  
}

export default App