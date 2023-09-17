import React, { useState } from "react";

function NewPlantForm() {
  const [formData, setFormData] = useState({
    name: "",
    image: "",
    price: "",
  });

  const handleChange = (event) => {
   let key = event.target.name;
   let  value = event.target.value;
    setFormData({
      ...formData,
      [key]: value,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData);
    fetch("http://localhost:6001/plants", {
      method: 'POST',
      headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
};

  

  return (
    <div className="new-plant-form">
      <h2>New Plant</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Plant name"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="image"
          placeholder="Image URL"
          value={formData.image}
          onChange={handleChange}
        />
        <input
          type="number"
          name="price"
          step="0.01"
          placeholder="Price"
          value={formData.price}
          onChange={handleChange}
        />
        <button type="submit">Add Plant</button>
      </form>
    </div>
  );
}

export default NewPlantForm;
