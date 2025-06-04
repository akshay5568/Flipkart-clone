import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

function FullProductPage () {

    const {index} = useParams();

    
    const products = useSelector(state => state.products.products)
    const filteredProduct = products.filter((_, i) => i == index);
    console.log(filteredProduct);
    
    return (
        <div>
           {filteredProduct.map((item => <h1>{item.title}</h1>))}
        </div>
    )
}

export default FullProductPage;