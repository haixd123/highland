import { Col, Row, Image, Button } from "antd"
import React from 'react';
import { Rate } from 'antd';

export const App: React.FC = () => <Rate />;

const Product = () => {
    return(
      
            <Col
            style={{margin: '20px 0', padding: '0 30px'}}
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{ span: 12 }}
            xs={{ span: 24 }}
            >
                <div>
                    <div>
                        <a>
                        <Image src="https://bizweb.dktcdn.net/thumb/large/100/465/740/products/thumbnailtiktok-2.jpg?v=1686797889000" />
                        </a>
                    </div>
                    <div>
                        <a style={{color: '#000', fontSize: '15px', fontWeight: '500'}} >
                            <span>[MUA 3 TẶNG 1] Cà phê rang xay Moka Highlands Coffee 200g - dòng cà phê cao cấp</span>
                        </a>
                    </div>
                    <div>
                        <span style={{color: '#b5313a'}}>Price</span>
                        <span> Old Price</span>
                    </div>
                    <div>
                        <App />
                    </div>
                    <div >
                        <Button style={{width: '100%', borderColor: '#b5313a', color: '#b5313a'}}>Chọn mua</Button>
                    </div>
                </div>
            </Col>
    )
}

export default Product