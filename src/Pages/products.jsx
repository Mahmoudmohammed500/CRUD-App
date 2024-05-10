import { useEffect, useState } from "react";
import '../CSS/products.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

function Products() {
    const [Products, setProducts] = useState([]);
    let API_URL = 'http://localhost:9000/products';

    const GetAllProducts = () => {
        fetch(API_URL)
            .then((res) => res.json())
            .then((data) => {
                setProducts(data);
            })
    }

    useEffect(() => {
        GetAllProducts()
    }, [])

    function DeleteProducts(Product) {
        const MySwal = withReactContent(Swal)
        MySwal.fire({
            title: `Are you sure you want to delete ${Product.title}`,
            showCancelButton: true
        }).then((data) => {
            if (data.isConfirmed) {
                fetch(`http://localhost:9000/products/${Product.id}`, {
                    method: 'delete'
                })
                    .then((res) => res.json)
                    .then(() => {
                        GetAllProducts()
                    })

            }
        })
    }

    return (
        <>
            <h1 className="text-center">Our Products</h1>
            <br></br>
            <Link to='/products/add' className="btn btn-success btn-sm"> Add New Product </Link>
            <br></br>
            <table className="table table-striped products-table">
                <thead>
                    <tr>
                        <th> Id</th>
                        <th>Title </th>
                        <th>Description </th>
                        <th>Price </th>
                        <th>Actions </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        Products.map((product) => {
                            return (
                                <tr key={product.id}>
                                    <td>{product.id}</td>
                                    <td>{product.title.slice(0, 28)}...</td>
                                    <td>{product.description.slice(0, 30)}...</td>
                                    <td>{product.price}$</td>
                                    <td>
                                        <button className="btn btn-danger btn-sm" onClick={() => { DeleteProducts(product) }}> Delete</button>
                                        <Link to={`/products/${product.id}`} className="btn btn-info btn-sm"> View</Link>
                                        <Link className="btn btn-primary btn-sm" to={`/products/edit/${product.id}`}> Edit</Link>
                                    </td>
                                </tr>
                            )
                        })}
                </tbody>
            </table>
        </>
    );
}

export default Products;
