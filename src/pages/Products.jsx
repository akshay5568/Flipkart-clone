import { useParams } from "react-router-dom";
import { useState } from "react";
import ListingProducts from "../components/ListingProducts";
function Products () {
 
    const {title} = useParams();

    return (
        <div>
            <ListingProducts catyegory={title}/>
        </div>
    )
}

export default Products;