import React from "react";

const ImageList = (props) => {
  console.log(props.images);
  return props.images.map(({description,id,url}) => (
      <div key={id}>
    <img
      src={url.regular}
      alt={description}
      width="500px"
      height="500px"
    /></div>
  ));
};

export default ImageList;
