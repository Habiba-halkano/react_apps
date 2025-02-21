import React from 'react'

const shoppingItem = ({item, toggleBought, removeItem}) => {
  return (
    <li>
    <span style={{ textDecoration: item.bought ? "line-through" : "none" }}>
        {item.name}
    </span>
    <div className="btn-container">
        <button onClick={() => toggleBought(item.id)} className="buy-btn">
            {item.bought ? "Undo" : "Buy"}
        </button>
        <button onClick={() => removeItem(item.id)} className="remove-btn">Remove</button>
    </div>
</li>
  )
}

export default shoppingItem