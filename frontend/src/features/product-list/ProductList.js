import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, incrementAsync, selectCount } from "./productListSlice";

export default function ProductList() {
  const products = [
    {
      id: 1,
      name: "Basic Tee",
      href: "#",
      imageSrc:
        "https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg",
      imageAlt: "Front of men's Basic Tee in black.",
      price: "$35",
      color: "Black",
    },
    // More products...
  ];

  const count = useSelector(selectCount);
  const dispatch = useDispatch();

  return (
    <div>
      <div></div>
    </div>
  );
}
