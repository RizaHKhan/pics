import React from "react";
import Image from "./Image";
import "./ImageList.css";

export default function ImageList(props) {
  console.log(props.images);
  const images = props.images.map((image) => (
    <Image key={image.id} image={image} />
  ));
  return <div className="image-list">{images}</div>;
}
