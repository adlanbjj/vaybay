import React, { useEffect, useState } from "react";

interface ItemList {
  id: number;
  name: string;
  price: number;
  description: string;
}

const AnoncePage: React.FC = () => {
  const [list, setList] = useState<ItemList[]>([]);
  const [currentItem, setCurrentItem] = useState<ItemList>({
    id: Date.now(),
    name: "",
    price: 0,
    description: "",
  });
 
  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    setCurrentItem({
      ...currentItem,
      [e.currentTarget.name]: e.currentTarget.value,
    });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const updatedItem = [...list, currentItem];
    setList(updatedItem);
    localStorage.setItem("newItem", JSON.stringify(updatedItem));
  };

  useEffect(() => {
    const savedList = localStorage.getItem("newItem");
    if (savedList) {
      setList(JSON.parse(savedList));
    } else {
      console.log("Error fetching users");
    }
  }, []);

 

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter product name"
          value={currentItem.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="price"
          placeholder="Enter product price"
          value={currentItem.price}
          onChange={handleChange}
        />
        <input
          type="text"
          name="description"
          placeholder="Enter product description"
          value={currentItem.description}
          onChange={handleChange}
        />
        <button>Add</button>
      </form>
      {list.map((lists, id) => (
        <div key={id}>
          <h2>{lists.name}</h2>
          <h3>{lists.price}</h3>
          <p>{lists.description}</p>
        </div>
      ))}
    </div>
  );
};

export default AnoncePage;
