import SellerNavbar from "./SellerNavbar";


function UploadProducts() {
    return (
        <div className="w-full h-fit"> 
        <SellerNavbar/>
           <div className="w-[40%] h-fit bg-red-100 mt-10 rounded-md text-center m-auto mb-9 p-3">
              <form action="" >
                   <input className="w-full p-2 border-1 mb-3" type="text" placeholder="Title" required/><br />
                   <input className="w-full p-2 border-1 mb-3" type="file" placeholder="Image" required/><br />
                   <input className="w-full p-2 border-1 mb-3" type="number" placeholder="Product Price" required/><br />
                   <input className="w-full p-2 border-1 mb-3" type="number" placeholder="Discount" /><br />
                   <textarea className="w-full p-2 border-1 mb-3" name="details" id="" placeholder="Product Details" required></textarea><br />
                   <input className="w-full p-2 border-1 mb-3" type="text" placeholder="catyegorys" required/><br />
                   <button className="p-1 px-5 rounded-md bg-red-300" >Submit</button>
              </form>
           </div>
        </div>
       
    )
}

export default UploadProducts;   