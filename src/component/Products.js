import {Link} from "react-router-dom"
import "./Product.css";

function Products(props) {
    const { data , isDetail } = props;
    let newDescription = data.description;
    if(!isDetail)
    {
        const siz = 170 - data.title.length;
        newDescription = data.description.slice(0, Math.min(siz, data.description.length));
        newDescription+= "...";
    }
    return (
        <div className="card">
            {
                isDetail ? <img src={data.image} class="rounded mx-auto d-block" alt={data.title}></img> :
                <img src={data.image} className="card-img-top height-00" alt={data.title} />
            }
            
            <div className="card-body">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{newDescription}</p>
                <p className="card-text">price: {data.price}$</p>
                {!isDetail && <Link className="btn btn-primary" to ={`/product/${data.id}`} >Details</Link>}      
            </div>
        </div>
    )
}
export default Products;