import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import './assets/add.css';
import 'react-toastify/dist/ReactToastify.css';

function Add() {
  const [title, setTitle] = useState('');
  const [price, setPrice] = useState('');
  const [code, setCode] = useState('');
  const [quantity, setQuantity] = useState('');
  const [astatka, setAstatka] = useState('');
  const [category, setCategory] = useState('');
  const [image, setImage] = useState(null); // Change to null to represent no file selected
  const [categoryTittle, setCategoryTittle] = useState('')

  const handleTitleChange = (e) => setTitle(e.target.value);
  const handlePriceChange = (e) => setPrice(e.target.value);
  const handleCodeChange = (e) => setCode(e.target.value);
  const handleQuantityChange = (e) => setQuantity(e.target.value);
  const handleAstatkaChange = (e) => setAstatka(e.target.value);
  const handleCategoryChange = (e) => setCategory(e.target.value);
  const handleImageChange = (e) => setImage(e.target.files[0]); // Handle file selection
  const handleCategoryTittleChange = (e) => setCategoryTittle(e.target.value);
  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append('title', title);
    formData.append('price', price);
    formData.append('code', code);
    formData.append('image', image); // Append file to FormData
    formData.append('box_count', quantity);
    formData.append('residual', astatka);
    formData.append('category', category);
    formData.append('category_rout', categoryTittle);

    fetch('https://tech-store.uz/product/12345678/create/', {
      method: 'POST',
      body: formData, // Send FormData instead of JSON string
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.status === 201) {
          toast.dark('Product added successfully');
        } else {
          toast.error('Product not added');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        toast.error('Error adding product');
      });
  };

  const inputs = [
    { label: 'Nomi', type: 'text', value: title, onChange: handleTitleChange },
    { label: 'Narxi', type: 'number', value: price, onChange: handlePriceChange },
    { label: 'Code', type: 'text', value: code, onChange: handleCodeChange },
    { label: 'Quti soni', type: 'number', value: quantity, onChange: handleQuantityChange },
    { label: 'Astatka', type: 'text', value: astatka, onChange: handleAstatkaChange },
    { label: 'Category', type: 'text', value: category, onChange: handleCategoryChange },
    { label: 'Category-title', type: 'text', value:categoryTittle, onChange: handleCategoryTittleChange },
    { label: 'Rasm', type: 'file', onChange: handleImageChange },
  ];

  return (
    <form className='add-form' onSubmit={handleSubmit}>
      <ToastContainer />
      {inputs.map((input, index) => (
        <div key={index} className='input-wrapper'>
          <label className='add-label'>{input.label}:</label>
          <input
            type={input.type}
            value={input.value}
            onChange={input.onChange}
            className={`input ${input.label}`}
          />
        </div>
      ))}
      <input type="submit" value="Submit" className="submit-btn" />
    </form>
  );
}

export default Add;
