import { Col, Image } from "antd";
import { api } from "../../../API/axios";
import { useEffect, useState } from "react";

const News:any = () => {

  const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await api.get("/postsNews");
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data.map((newData: any, index: any) => {
  return (
    
    <Col
      style={{ padding: "0 15px" }}
      lg={{ span: 8 }}
      md={{ span: 8 }}
      sm={{ span: 12 }}
      xs={{ span: 24 }}
    >
      <div>
        <div>
          <a href="#">
            <Image
              // style={{ maxWidth: "100%" }}
              src={newData.src}
            />
          </a>
        </div>
        <div>
          <h3>
            <a href="#">{newData.content}</a>
          </h3>
        </div>
        <div>
          <span>{newData.date}</span>
        </div>
      </div>
    </Col>
  );
});

};

export default News;
