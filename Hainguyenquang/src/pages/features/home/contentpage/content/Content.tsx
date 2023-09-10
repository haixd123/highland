import { Image, Col, Row } from "antd";
import { useEffect, useState } from "react";
import "./Content.scss";
import { api } from "../../../../../api";

const Slide: any = () => {
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
        key={newData.id}
        //!media xs,sm thêm padding 0 0 30px 0
        className={newData.backGroundColor === 1 ? "backGroundColorImg1" : newData.backGroundColor === 2 ? "backGroundColorImg2" : "backGroundColorImg3"}
        align={"middle"}
        justify={"end"}

      >
        <Col
          key={newData.id}
          className="sliceContent"
          lg={{ span: 12, order: newData.style === 1 ? 1 : newData.style === 2 ? 2 : 1 }}
          md={{ span: 12, order: 2 }}
          sm={{ span: 24, order: 2 }}
          xs={{ span: 24, order: 2 }}
        >
          <div className="colContent"
          >
            <Row key={newData.id} justify={newData.style === 1 ? "start" : newData.style === 2 ? "end" : "start"}>
              <Col key={newData.id} className={newData.style === 1 ? "sliceColTitleReverse1" : newData.style === 2 ? "sliceColTitle" : "sliceColTitleReverse"} span={24}>
                {newData.title}
              </Col>
              <Col key={newData.id} className={newData.style === 1 ? "sliceColContent1Reverse1" : newData.style === 2 ? "sliceColContent1" : "sliceColContent1Reverse"} span={24}>
                {newData.contentHeader}
              </Col>
              <Col key={newData.id} className={newData.style === 1 ? "sliceColContent2Reverse" : newData.style === 2 ? "sliceColContent2" : "sliceColContent2Reverse"} span={24}>
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
            <Image key={newData.id} style={{ maxWidth: "100%" }} src={newData.srcImg} />
          </a>
        </Col>
      </Row>
    );
  })
};

export default Slide;
