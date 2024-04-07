import React, { useState } from 'react';

function Create() {
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch('https://neevoo.uz/product/12345678/create-image/', {
      method: 'POST',
      body: file,
    }).then((res)=>res.json()).then((e)=>console.log(e))
    console.log('tugma bosildi javob kutyapman');
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label >
          Rasmi <input type="file" id="file" onChange={handleFileChange} />
        </label>
        <input type='submit' name='Submit'/>
      </form>
    </div>
  );
}

export default Create;
