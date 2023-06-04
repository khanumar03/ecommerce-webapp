import React, { useEffect, useState } from "react";
import "./home.css";
import { image } from "../data/imgdata.js";
import Product from "./product.js";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const Home = () => {
  const [images, setimage] = useState(image);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let lastIndex = images.length - 1;
    if (index > lastIndex) {
      setIndex(0);
    }
    if (index < 0) {
      setIndex(lastIndex);
    }
  }, [images, setIndex, index]);
  return (
    <div className="home">
      <div className="container">
        <div className="img">
          {images.map((x, xIn) => {
            const { id, src } = x;
            let position = "nextslide";
            if (index === xIn) {
              position = "activeslide";
            }
            return <img className={position} src={src} alt={id} key={xIn} />;
          })}
          <button className="btn btnleft" onClick={() => setIndex(index - 1)}>
            <IoIosArrowBack fontSize="30px" color="white" />
          </button>
          <button className="btn btnright" onClick={() => setIndex(index + 1)}>
            <IoIosArrowForward fontSize="30px" color="white" />
          </button>
        </div>
        <div className="items">
          <div className="f_row">
            <Product
              id="101"
              title="Apple iPhone 13 Pro Max (512GB) - Silver"
              src="https://m.media-amazon.com/images/I/61D84NtVgVL._SX679_.jpg"
              price={2}
            />
            <Product
              id="102"
              title="Samsung 125cm Ultra HD (4K) LED Smart TV, 7 Series 50AU7700"
              src="https://www.reliancedigital.in/medias/Samsung-50AU7700-Television-492166316-i-2-1200Wx1200H?context=bWFzdGVyfGltYWdlc3wyOTQ3ODF8aW1hZ2UvanBlZ3xpbWFnZXMvaGRhL2g3Yi85NTU1ODIzNDI3NjE0LmpwZ3xhMjNlZmVhYjZjZmMxZjdjYTFkZTkyNDYxYmE1YThlMDIwZTY4ZDUzM2YxNDliYzlmMWQ0ODgwMDNkNTcxZmY4"
              price={4}
            />
            <Product
              id="103"
              title="ASUS RT-AX82U AX5400 Dual Band WiFi 6 (Black) Gaming Router"
              src="https://m.media-amazon.com/images/I/71Y8TeozxKL._SL1500_.jpg"
              price={6}
            />
            <Product
              id="104"
              title="Samsung Galaxy S21"
              src="https://m.media-amazon.com/images/I/91C0EYR0q5L._SL1500_.jpg"
              price={8}
            />
          </div>
          <div className="s_row">
            <Product
              id="105"
              title="Apple Watch Series 7 (GPS, 41mm) - Midnight Aluminium"
              src="https://m.media-amazon.com/images/I/71gg8mPlAuL._SL1500_.jpg"
              price={41900}
            />
            <Product
              id="106"
              title="INNO3D GEFORCE RTX 3090 ICHILL X4 24GB GDDR6X PCIe 4.0 Gaming Graphic Card - C30904-246XX-1880VA36"
              src="https://m.media-amazon.com/images/I/61j0-7Ntj1L._SL1140_.jpg"
              price={140000}
            />
            <Product
              id="107"
              title="HP Chromebook x360 14-inch (35.56 cms) Thin & Light Touchscreen Laptop"
              src="https://m.media-amazon.com/images/I/81c8tO4ibAL._SL1500_.jpg"
              price={23173}
            />
            <Product
              id="108"
              title="Lenovo Q-Series 23.8-inch FHD IPS Ultraslim Monitor"
              src="https://m.media-amazon.com/images/I/61QbHXEKlAS._SL1500_.jpg"
              price={10}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
