import React from "react";
import { Carousel, Image } from "antd";

const contentStyle: React.CSSProperties = {
  margin: 0,
  height: "160px",
  color: "#fff",
  lineHeight: "160px",
  textAlign: "center",
  background: "#364d79",
};

const SlideProduct = () => {
  const onChange = (currentSlide: number) => {
    console.log(currentSlide);
  };

  return (
    <>
      <Carousel
        afterChange={onChange}>
        <div>
          <Image placeholder={true} preview={false} src="https://bizweb.dktcdn.net/100/465/740/themes/884110/assets/slider_2.jpg?1688168044703" />
        </div>
        <div>
          <Image placeholder={true} preview={false} src="https://bizweb.dktcdn.net/100/465/740/themes/884110/assets/slider_3.jpg?1688168044703" />
        </div>
      </Carousel>
    </>

  );
};

export default SlideProduct;
