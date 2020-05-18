import React from "react";

export default function ImageList(props) {
  console.log(props.images);
  const images = props.images.map(({ description, id, urls}) => <img src={urls.regular} key={id} alt={description} />);
  return <div>{images}</div>;
}
