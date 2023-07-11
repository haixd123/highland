import { Image, Col, Row } from "antd";
import SeeMore from "../seeMore/seemore";
import "../style.scss";


const Slide: any = (props: any) => {
  // title:any, content:any
  return (
    <Row
    //!media xs,sm thêm padding 0 0 30px 0
    className="slideRow"
    align={"middle"} justify={"end"} 
    // style={{backgroundColor: '#bd945d', boxSizing: 'border-box',
    //  padding: '0 0 30px 0'
    // }}
    >
        <Col
        lg={{span:12, order: props.style ? 1 : 2 }}
        md={{span:12, order: 2 }}
        sm={{span:24, order: 2 }}
        xs={{span:24, order: 2 }}
        pull={1}
        >
            <Row
            justify={"end"}
            >
                <Col 
                className="sliceColTitle"
                span={24}>
                {props.title}
                </Col>
                <Col
                className="sliceColContent1" 
                span={24}>
                {props.content1}
                </Col>
                <Col 
                className="sliceColContent2" 
                span={24}>
                {props.content2}
                </Col>
                <SeeMore />
            </Row>
        </Col>
        <Col
        className={props.slice}
        lg={{span:12, order: 1 }}
        md={{span:12, order: 1 }}
        sm={{span:24, order: 1 }}
        xs={{span:24, order: 1 }}
        >
            <a href="#">
                <Image style={{ maxWidth: "100%" }} src={props.src} />
            </a>
        </Col>
    </Row>
  );
};

export default Slide;
