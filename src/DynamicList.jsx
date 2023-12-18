import { useState } from "react";

export default function DynamicList() {
    // store state in local storage
    const [items, setItems] = useState(
      JSON.parse(localStorage.getItem('items')) || []
    )
    // const [items, setItems] = useState(['Item 1', 'Item 2'])
  
    function addItem (){
      // store state in local storage
      setItems([...items, `Item ${items.length + 1}`])
      localStorage.setItem('items', JSON.stringify(items))
    }
    function removeItem() {
        // Remove the last item from the list
        const newItems = [...items];
        newItems.pop();
        setItems(newItems);
        localStorage.setItem('items', JSON.stringify(newItems));
    }
    function clearItem(){
        setItems([]);
        localStorage.removeItem('items')
    }
  
    return (
      <div>
        <ul>
          {items.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
        <button onClick={addItem} className="p-2 border rounded">
          Add Item
        </button>
        <button onClick={removeItem} className="p-2 border rounded">
            Delete
        </button>
        <button onClick={clearItem} className="p-2 border rounded">
            Clear
        </button>
      </div>
    )
  }
  