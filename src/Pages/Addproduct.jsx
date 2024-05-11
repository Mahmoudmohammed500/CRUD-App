import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import '../CSS/form.css';
function Addproduct() {
  const [title, settitle] = useState('');
  const [description, setdescription] = useState('');
  const [price, setprice] = useState(0);
  const navegate = useNavigate();

  const FormSubmit = (e) => {
    e.preventDefault()
     // post new data to server by Fetch( )
    fetch("https://json-server-for-crud-app-repositry.onrender.com/products", { //"http://localhost:9000/products" this is the local json server url
      method: "post",
      Headers: {
        "Content-type": "Aplication/json"
      },
      body: JSON.stringify({
        title,
        description,
        price
      })
    })
    .then((res) => res.json)
    .then(() =>  navegate('../products'))

    /*
    // Post data to server by axios library
    axios
    .post("http://localhost:9000/products",{
      title,
      description,
      price
    }).then((data) => console.log(data))
    navegate('../products')
    */
  }

  return (
    <>
      <h1 className="text-center">Add Product</h1>
      <br></br>   <br></br>

      <form className="container form" onSubmit={FormSubmit}>
        <fieldset>
        <div className="mb-3">
          <label htmlFor="producttitle" className="form-label">Title</label>
          <input type="text" className="form-control" id="producttitle" placeholder="Product Title" aria-describedby="Product Title" onChange={(e) => { settitle(e.target.value) }} />
        </div>
        <br></br>
        <div className="mb-3">
          <label htmlFor="productdescription" className="form-label">Description</label>
          <input type="text" className="form-control" id="productdescription" placeholder="Product Description" aria-describedby="Product Description" onChange={(e) => { setdescription(e.target.value) }} />
        </div>
        <br></br>
        <div className="mb-3">
          <label htmlFor="productprice" className="form-label">price</label>
          <input type="number" className="form-control" id="productprice" placeholder="Product Price" aria-describedby="Product Price" onChange={(e) => { setprice(e.target.value) }} />
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary d-block m-auto">Add Product</button>
        </fieldset>
      </form>
    </>
  );
}

export default Addproduct;
