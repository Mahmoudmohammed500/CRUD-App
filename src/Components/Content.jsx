import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Products from "../Pages/products";
import Categories from "../Pages/Categories";
import Addproduct from "../Pages/Addproduct";
import Productsdetails from "../Pages/Productsdetails";
import Editproduct from '../Pages/Editproduct';
import Addcategory from "../Pages/Addcategory";
import Editcategory from "../Pages/Editcategory";
import Categorydetails from "../Pages/Categorydetails";
import Scrolltop from "./Scrolltop";
function Content() {
    return (
        <>
         <Scrolltop />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/add" element={<Addproduct />} />
                <Route path="/products/:productid" element={<Productsdetails />} />
                <Route path="/products/edit/:productid" element={<Editproduct />} />
                <Route path="/categories" element={<Categories />} />
                <Route path="/categories/add" element={<Addcategory />} />
                <Route path="/categories/edit/:categoryid" element={<Editcategory />} />
                <Route path="/categories/:categoryid" element={<Categorydetails />} />
            </Routes>
        </>
    );
}

export default Content;

/*
To Make Nested Routing from /products     use this code >>
 
              <Route path="/products" element={<> <Outlet /> </>} >
                  <Route path="" element={<Products />} />
                  <Route path="add" element={<Addproduct />} />
                  <Route path=":productid" element={<Productsdetails />} />
                  <Route path="edit/:productid" element={<Editproduct />} />
              </Route>
*/
