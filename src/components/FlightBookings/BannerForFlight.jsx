import { useState } from "react";

function BannerForFlight () {
   
    const [bannerImg , setBannerImg] = useState([
        {img:'https://rukminim2.flixcart.com/fk-p-flap/4000/3000/image/688c742372ba94e8.jpg?q=50'},
        {img:'https://rukminim2.flixcart.com/fk-p-flap/4000/3000/image/9f2161a6f2d0cf87.jpg?q=50'},
        {img:'https://rukminim2.flixcart.com/fk-p-flap/4000/3000/image/4f413cf95a8f0669.jpg?q=50'},
        {img:'https://rukminim2.flixcart.com/fk-p-flap/4000/3000/image/74faf923d76a9bda.jpg?q=50'},
    ])
    return (
        <div className="w-full h-fit">
             <div className="w-full h-[35vh] bg-red-600 flex overflow-auto scrollbar-hide">
                        {bannerImg.map(item => {
                            return <img src={item.img} alt="" /> 
                        })}
             </div>

             <div className="w-full h-fit bg-red-600 mt-2">
                 <img src="https://rukminim2.flixcart.com/fk-p-flap/4000/3000/image/daf25c79fd3f2cb1.jpeg?q=50" alt="" />
                 <img src="https://rukminim2.flixcart.com/fk-p-flap/4000/3000/image/314d78512857f86d.png?q=50" alt="" />
             </div>


             <div className="mt-3 mb-3"> 
                  <div>
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/4000/3000/image/9c3ebd56f796128e.jpg?q=50" alt="" />
                    <img src="https://rukminim2.flixcart.com/fk-p-flap/4000/3000/image/10256a9f3d5d1c9a.png?q=50" alt="" />
                  </div>
             </div>
        </div>
    )
}

export default BannerForFlight;