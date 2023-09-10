/* eslint-disable jsx-a11y/anchor-is-valid */
import { Col, Image } from "antd";
import { api } from "../../../../../api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import './News.scss'


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
        className="ColNews"
        lg={{ span: 8 }}
        md={{ span: 8 }}
        sm={{ span: 12 }}
        xs={{ span: 24 }}
      >
        <div>
          <div className="slugImg">
            <a onClick={() => {
              localStorage.setItem('newsSlug', newData.slug)
              navigate(`${newData.slug}`)
            }}>
              <Image
                placeholder={true} preview={false}
                key={newData.id}
                src={`http://localhost:8888/getPhoto/${newData.srcImage}`}
              />
            </a>
          </div>
          <div className="slugTitle" >
            <a onClick={() => {
              localStorage.setItem('newsSlug', newData.slug)
              navigate(`${newData.slug}`)
            }} className="title">{newData.title}</a>
            <div className="date">
              <span>{newData.date}</span>
            </div>
          </div>
        </div>
      </Col>
    );
  });

};

export default News;
