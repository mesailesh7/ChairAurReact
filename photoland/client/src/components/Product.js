import React from "react";
// link
import { Link } from "react-router-dom";

const Product = ({ product }) => {
  console.log(product);
  return (
    <Link>
      <div>
        {/* Image */}
        <div>
          <img
            src={`http://localhost:1337${product.attributes.image.data.attributes.url}`}
            alt=""
          />
        </div>
      </div>
    </Link>
  );
};

export default Product;
