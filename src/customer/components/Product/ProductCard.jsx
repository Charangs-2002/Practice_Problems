import React from "react";  
import "./ProductCard.css";

const ProductCard = ({ Product }) => {
    return (
        <div className="ProductCard w-[15rem] m-2 transition-all cursor-pointer" > 
            <div className="h-[15rem] w-full object-cover pl-3">
             <img className="h-full w-full object-cover"
                src={Product.image}
                alt=""/>
            </div>
            <div className="textPart bg-white pl-3">
                    <div>
                    <p>{Product.name}</p> 
                    </div>
                    <div className="flex items-center space-x-3">
                    <p className="text-green-600 font-semibold">{Product.discount}% OFF</p>
                    <p className="line-through text-gray-500 opacity-70">₹{Product.originalPrice}</p>
                    <p className="text-red-500 font-bold">₹{Product.finalPrice}</p>
                </div>
            </div>               
        </div>
    )
};

export default ProductCard;