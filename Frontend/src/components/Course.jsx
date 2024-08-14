// eslint-disable-next-line no-unused-vars
import React from "react";
import Cards from "./Cards";
import list from "../../public/list.json";

function Course() {
  return (
    <>
      <div className="`max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 item-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl">
            We are delighted to have you{" "}
            <span className=" text-pink-500 ">Here! :)</span>
          </h1>
          <p className="mt-12">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. In voluptas
            doloremque quam soluta. Soluta deserunt nesciunt minus, nulla a
            necessitatibus fugiat culpa. Quo perferendis consequuntur, ullam
            doloremque consequatur sint laborum?
          </p>
        
            <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back
            </button>
        
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {list.map((item) => {
            <Cards key={item.id} item={item} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Course;
