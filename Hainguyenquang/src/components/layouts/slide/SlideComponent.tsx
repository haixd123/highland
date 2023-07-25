import { Image, Col, Row } from "antd";
import React, { useEffect, useState } from "react";
import SeeMore from "../seeMore/seemoreComponent";
import "../style.scss";
import { api } from "../../../API/axios";

const Slide: any = (props: any) => {
  // title:any, content:any
  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await api.get("/poststContent");
    setData(response.data);
    console.log("response: ", response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data.map((newData: any, index: any) => {
    const sum = parseFloat(newData.price) * parseFloat(newData.sale);
  return (
    <Row
      //!media xs,sm thêm padding 0 0 30px 0
      className={newData.backGroundColor === 1 ? "backGroundColorImg1" : newData.backGroundColor === 2 ? "backGroundColorImg2" : "backGroundColorImg3"}
      align={"middle"}
      justify={"end"}

    >
      <Col
        className="sliceContent"
        lg={{ span: 12, order: newData.style === 1 ? 1 : newData.style === 2 ? 2 : 1}}
        md={{ span: 12, order: 2 }}
        sm={{ span: 24, order: 2 }}
        xs={{ span: 24, order: 2 }}
        // pull={1}
      >
        <div className="colContent" style={{width: '80%', margin: '0 auto'}}>
        <Row justify={ newData.style === 1 ? "start" : newData.style === 2 ? "end" : "start"}>
          <Col className={newData.style === 1 ? "sliceColTitleReverse1" : newData.style === 2 ? "sliceColTitle" : "sliceColTitleReverse"} span={24}>
            {newData.title}
          </Col>
          <Col className={newData.style === 1 ? "sliceColContent1Reverse1" : newData.style === 2 ? "sliceColContent1" : "sliceColContent1Reverse"} span={24}>
            {newData.contentHeader}
          </Col>
          <Col className={newData.style === 1 ? "sliceColContent2Reverse" : newData.style === 2 ? "sliceColContent2" : "sliceColContent2Reverse"} span={24}>
            {newData.content}
          </Col>
          <div className="seeMoreContent">
            <a href="#" className={newData.seeMoreContent === 1 ? "ContentSeemoreLink1" : "ContentSeemoreLink"}>
              Xem thêm
            </a>
          </div>
        </Row>
        </div>
      </Col>
      <Col
        className={newData.style === 1 ? "slice1" : newData.style === 2 ? "slice2" : "slice3"}
        lg={{ span: 12, order: 1 }}
        md={{ span: 12, order: 1 }}
        sm={{ span: 24, order: 1 }}
        xs={{ span: 24, order: 1 }}
      >
        <a href="#">
          <Image style={{ maxWidth: "100%" }} src={newData.srcImg} />
        </a>
      </Col>
    </Row>
  );})
};

export default Slide;
