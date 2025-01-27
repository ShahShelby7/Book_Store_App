import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";  //slick corousel for books sliding 
import Slider from "react-slick";
import Card from "./Card";
import { useEffect, useState } from "react";
import axios from "axios";

export default function FreeBooks() {
  const [booksList, setBooks] = useState([]);
  useEffect(() => {
    const getBooks = async () => {
      try {
        const response = await axios.get('http://localhost:8080/api/book'); //api req to backend and backend send the req to database
        console.log(response.data.filter(books => books.category == "free"));
        setBooks(response.data.filter(books => books.category == "free"));
      }
      catch (error) {
        console.log("error is....", error);
      }
    }
    getBooks();
  }, []);

  //for slick corousel
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="max-w-screen-2xl container mx-auto md:px-16 px-4 mt-16">

      <div>
        <h1 className="text-xl font-semibold">Free Offered books</h1>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto sed adipisci, distinctio, expedita provident, maiores quisquam alias esse ipsa voluptatum quis ipsam repellat. Soluta inventore impedit ad omnis corporis a!
      </div>


      <div className="slider-container">
        <Slider {...settings}> {/*all the divs inside it will added to slider */}
          {booksList.map(book => (
            <Card book={book} key={book._id} />
          ))}
        </Slider>
      </div>

    </div>
  )
}