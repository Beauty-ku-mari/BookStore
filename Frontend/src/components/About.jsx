import React from "react";

function About() {
  return (
    <div>
      <>
        <div className="`max-w-screen-2xl container mx-auto md:px-20 px-4">
          <div className="mt-20 item-center justify-center text-center">
            <h1 className="text-3xl font-bold md:text-4xl text-pink-500 ">
              About us
            </h1>

            <p className="mt-12 text-xl">
              Welcome to <span className="text-pink-500">BOOKSTORE</span> , your ultimate destination for book lovers!
              Whether you're a casual reader exploring new genres or a dedicated
              bibliophile hunting for the next great read, we’ve got something
              just for you. Our app offers an extensive collection of books,
              spanning from timeless classics to the latest bestsellers, curated
              to satisfy every literary appetite.
              <br />
              <div className="mt-6">
                At <span className="text-pink-500">BOOKSTORE</span>, we believe that the joy of reading should be
                accessible to everyone. That’s why we provide a selection of
                books for free—so you can dive into incredible stories and
                expand your horizons without spending a penny. For those seeking
                something truly special, our paid section features exclusive
                titles, fresh releases, and premium content that promises an
                exceptional reading experience.
              </div>
              <br />
              We also offer a wide variety of genres to suit all interests.
              Whether you're into captivating storybooks, entertaining reads,
              delicious cooking guides, or exciting game books, you’ll find it
              all here. Whatever your passion, <span className="text-pink-500">BOOKSTORE</span> has the perfect book
              waiting for you. Explore, discover, and immerse yourself in the
              world of books with <span className="text-pink-500">BOOKSTORE</span>—where every book opens up a new
              adventure!
            </p>
          </div>
        </div>
      </>
    </div>
  );
}

export default About;
