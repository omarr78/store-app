import { useEffect, useState } from "react";
import {useParams } from "react-router-dom";
import Products from "./Products";


function ProductDetails(){
    const params = useParams();
    const [pro,setPro] = useState({});
    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/${params.productId}`)
            .then(res=>res.json())
            .then(json=>setPro(json));
    },[params.productId]);
    
    return(
        <Products data = {pro} isDetail = {true}/>
    );
}
export default ProductDetails;