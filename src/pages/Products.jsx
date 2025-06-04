import { useParams } from "react-router-dom";
import { useState } from "react";
import ListingProducts from "../components/ListingProducts";
function Products () {
    const [products, setProducts] = useState([
        {img:'', title:'', price:3434, catyegory:'Electronics'},
        {img:'', title:'', price:2500, catyegory:'Mobiles'},
        {img:'', title:'', price:24235, catyegory:'Fashion'},
        {img:'', title:'', price:252525, catyegory:'Kilos'},
    ])
    const {title} = useParams();
    const filteredproducts = products.filter(products => products.catyegory === title);

    return (
        <div>
            <ListingProducts catyegory={title}/>
        </div>
    )
}

export default Products;