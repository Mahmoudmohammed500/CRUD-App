import { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import '../CSS/form.css';
function Addcategory() {
    const [title, settitle] = useState('');
    const [quantity, setquantity] = useState(0);
    const navegate = useNavigate();

    const FormSubmit = (e) => {
        e.preventDefault()
        // post new data to server by Fetch( )
        fetch("https://json-server-for-crud-app-repositry.onrender.com/categories", {
            method: "post",
            headers: {
                "Content-type": "application/json"
            },
            body: JSON.stringify({
                title,
                quantity
            })
        })
            .then((res) => res.json)
            .then(() => navegate('../categories'))

        /*
        // Post data to server by axios library
        axios
        .post("http://localhost:9000/categories",{
          title,
          description,
          price
        }).then((data) => console.log(data))
        navegate('../categories')
        */
    }
    return (
        <>
            <h1 className="text-center"> Add Category</h1>
            <br></br>   <br></br>
            <form className="container form" onSubmit={FormSubmit}>
                <fieldset>
                    <div className="mb-3">
                        <label htmlFor="categorytitle" className="form-label">Title</label>
                        <input type="text" className="form-control" id="categorytitle" placeholder="Category Title" aria-describedby="Product Title" onChange={(e) => { settitle(e.target.value) }} />
                    </div>
                    <br></br>
                    <div className="mb-3">
                        <label htmlFor="catquantity" className="form-label">Quantity</label>
                        <input type="number" className="form-control" id="catquantity" placeholder=" Number oF Products on this category" aria-describedby="Quantity" onChange={(e) => { setquantity(e.target.value) }} />
                    </div>
                    <br></br>
                    <button type="submit" className="btn btn-primary d-block m-auto">Add Category</button>
                </fieldset>
            </form>
        </>
    )
}
export default Addcategory;