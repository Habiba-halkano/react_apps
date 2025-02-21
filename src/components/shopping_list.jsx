import React, { useState } from 'react';
import ShoppingItem from "./shopping_items";
import AddItemForm from './add_item';

const shopping_list = () => {
    const [items, setItems] = useState([]);

    const addItem = (itemName) => {
        if (!itemName.trim()) return; // Prevent adding empty items
        setItems((prevItems) => [...prevItems, { id: Date.now(), name: itemName, bought: false }]);
    };
    

    const toggleBought = (id) => {
        setItems(items.map(item => {
            if (item.id === id) {
                return {...item, bought: !item.bought};
            }
            return item;
        }));
    }

    const removeItem = (id) => {
        setItems(items.filter(item => item.id !== id));
    }

    return (
        <div>
            <AddItemForm addItem={addItem} />
            <ul>
                {items.length > 0 ? (
                    items.map(item => (
                        <ShoppingItem 
                            key={item.id} 
                            item={item}
                            toggleBought={toggleBought} 
                            removeItem={removeItem} 
                        />
                    ))
                ) : (
                    <p>No items added yet.</p>
                )}
            </ul>
        </div>
    );
}    

export default shopping_list