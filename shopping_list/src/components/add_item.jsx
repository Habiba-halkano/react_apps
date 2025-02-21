import React, {useState} from 'react'

const addItemForm = ({addItem}) => {
  const [name, setName] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim()) {
      addItem(name);
      setName('');
    }
  }
  return (
    <div className='form-container'>
    <form onSubmit={handleSubmit}>
      <input 
        type="text"
        placeholder="Enter item name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
    </div>
  )
}

export default addItemForm