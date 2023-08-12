import { Row, Col, Button, Space } from "antd"
import '../../../style.scss'
import axios from "axios";
import { useEffect, useState } from "react";
import { api } from "../../../../../api";

const Sale:any = (props:any) => {
    const [data, setData] = useState([]);

  const fetchData = async () => {
    const response = await api.get("/postsVouchers");
    if (response.status === 200) {
      setData(response.data);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  return data.map((newData: any, index: any) => {
    return(
            <Col
            style={{textAlign: 'center'}}
            className="colSale"
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
            >
                <div 
                className="saleContent"
                >
                    <div>
                        <span><b>Voucher</b></span>
                        <br /> 
                        <span>{newData.desc}</span>
                    </div>
                    <div
                    className="slaceContentFooter">
                        <p>{newData.sale}</p>
                        <Button style={{backgroundColor: '#b5313a', color: '#fff'}}>Lưu</Button>
                    </div>
                </div>
            </Col>
        
    )
})
}

export default Sale