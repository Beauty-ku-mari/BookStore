// eslint-disable-next-line no-unused-vars
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
// eslint-disable-next-line no-unused-vars
import Slider from "react-slick";
import Cards from "../components/Cards"; // Adjust the path as necessary
import list from "../../public/list.json";

function Paidbook() {
  const filterData = list.filter((item) => item.price > 0);
  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div>
          <h1 className="font-semibold text-xl pb-2">Paid Offered Courses</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum unde
            dolorem blanditiis nulla obcaecati corporis temporibus ipsa eius
            optio. Laborum eaque veniam nihil, odio est ducimus! Vitae vero cum
            et?
          </p>
        </div>
        <div className="mt-12 grid grid-cols-1 md:grid-cols-4">
          {filterData.map((item) => (
            <Cards
              key={item.id}
              name={item.name}
              image={item.image}
              title={item.title}
              price={item.price}
              category={item.category}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default Paidbook;
