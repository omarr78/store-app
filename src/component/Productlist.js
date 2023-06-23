import { useEffect, useState } from "react";
import Products from "./Products";
import "./Productlist.css"

import "./Product.css";
function Productlist() {
    const [data,setData] = useState([]);
    const [categories,setCategories] = useState([]);
    const fetchAllCategories = ()=>{
        fetch('https://fakestoreapi.com/products/categories')
            .then(res=>res.json())
            .then(json=>setCategories(json));
    }
    const fetchAllData = ()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res =>res.json())
        .then(jsonData => setData(jsonData))
        .catch(error => console.log('Error fetching data:', error));
    }
    const fetchInCat = (catName)=>{
        fetch(`https://fakestoreapi.com/products/category/${catName}`)
            .then(res=>res.json())
            .then(json=>setData(json))
    }
    useEffect(()=>{
        fetchAllData();
        fetchAllCategories();

    },[])

    console.log(categories);
    return (
        <>
            <h2 className="text-center p-3">Our Product</h2>
            <div className="container">
                    <button className = "btn btn-info lft-rt" onClick={()=>{
                        fetchAllData();
                    }}>All</button>
                {categories.map(cat =>(
                    <button className = "btn btn-info lft-rt" onClick={()=>{
                        fetchInCat(cat);
                    }}>{cat}</button>
                ))}
                <div className="row">
                    {data.map(item =>(
                        <div key={item.id} className="col-md-4 mar" >
                            <Products data = {item} isDetail ={false}/>
                        </div>
                    ))}
                    
                </div>
            </div>
        </>
    )
}
export default Productlist;