import book from "../assets/list.json" assert { type: "json" };

const filterData = list.filter((data) => data.category === "Free");


<Slider {...settings}>
            {filterData.map((book) => (
              <Cards 
                key ={book.id}
                category={book.category}
                name={book.name}
                title={book.title}
                price={book.price}
                image={book.image}
                id={book.id}
              />
            ))}
          </Slider>