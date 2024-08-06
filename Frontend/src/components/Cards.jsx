// eslint-disable-next-line no-unused-vars
import React from "react";

// eslint-disable-next-line react/prop-types
function Cards({ name, image, title, price, category }) {
  return (
<>
<div className=" mt-4 my-3 p-3">
    <div className="card w bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {name}
          <div className="badge badge-secondary">  {category}</div>
        </h2>
        <p>Title: {title}</p>
        <div className="card-actions justify-between">
          <div className="badge badge-outline">${price}</div>
          <div className=" cursor-pointer px-2 py-1 rounded-full border-[2px] hover:bg-pink-500 hover:text-white duration-200">Buy Now</div>
        </div>
      </div>
    </div>
</div>
</>
  );
}

export default Cards;