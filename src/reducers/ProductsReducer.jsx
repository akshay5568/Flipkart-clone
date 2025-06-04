import { createSlice } from "@reduxjs/toolkit";


const initialState = {
     products :   [
            {img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/headphone/v/p/3/-original-imah8bfrrurageu2.jpeg?q=70', title: 'TRIGGR Kraken X1 with Battery Display, 40ms Latency, Qu...', price : 899, discount :89 , details: 'Black, True Wireless', catyegorys:'Electronics'},
            {img: 'https://rukminim2.flixcart.com/image/312/312/xif0q/mobile/u/r/r/-original-imah9khh8wgzdafb.jpeg?q=70', title: 'Apple iPhone 16e (White, 128 GB)', price : 54900, discount :8, details: 'iPhone 16e is built for Apple Intelligence and powered by the A18 chip.', catyegorys:'Mobiles'},
            {img: 'https://rukminim2.flixcart.com/image/612/612/xif0q/t-shirt/0/d/h/m-fsmtsrt-2039-kajaru-original-imah9habm3fzhbmn.jpeg?q=70', title: 'Men Self Design Round Neck Polyester Dark Green T-Shirt', price : 299, discount :70 , details: 'KAJARU', catyegorys:'Fashion' },
        ]
}


export const ProductsReducer = createSlice({
    name: 'products',
    initialState,
    reducers: {

    }
})

export default ProductsReducer.reducer;
