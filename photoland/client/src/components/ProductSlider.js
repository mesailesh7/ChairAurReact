import React from "react";
// import swiper react component
import { Swiper, SwiperSlide } from "swiper/react";
// import swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination, Navigation } from "swiper";
// components
import Product from "../components/Product";

const ProductSlider = ({ data }) => {
  console.log(data);

  return (
    <Swiper>
      <>
        {data?.map((product) => {
          return (
            <SwiperSlide key={product.id}>
              <Product product={product} />
            </SwiperSlide>
          );
        })}
      </>
    </Swiper>
  );
};

export default ProductSlider;
