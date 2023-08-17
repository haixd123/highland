import { Col, Image } from "antd";
import { api } from "../../../../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const News: any = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  const fetchData = async () => {
    const response = await api.get("/postsNews");
    setData(response.data);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data.map((newData: any) => {
    return (
      <Col
        key={newData.id}
        style={{ padding: "0 15px" }}
        lg={{ span: 8 }}
        md={{ span: 8 }}
        sm={{ span: 12 }}
        xs={{ span: 24 }}
      >
        <div>
          <div>
            <a onClick={() => {
              localStorage.setItem('newsSlug', newData.slug)
              navigate(`${newData.slug}`)}}>
              <Image
                placeholder={true} preview={false}
                key={newData.id}
                // style={{ maxWidth: "100%" }}
                src={`http://localhost:8888/getPhoto/${newData.srcImage}`}
              />
            </a>
          </div>
          <div style={{ margin: '10px 0 30px' }}>
            <a onClick={() => {
              localStorage.setItem('newsSlug', newData.slug)
              navigate(`${newData.slug}`)}} style={{ fontSize: '17px', fontWeight: '500' }}>{newData.title}</a>
            <div style={{ margin: '5px 0 0' }}>
              <span>{newData.date}</span>
            </div>
          </div>
        </div>
      </Col>
    );
  });

};

export default News;
