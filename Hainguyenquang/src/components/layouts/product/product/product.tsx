import { Col, Image, Button } from "antd"
import React from 'react';
import { Rate } from 'antd';
import '../../style.scss'


export const App: React.FC = () => <Rate />;

const Product = () => {
    return(
            <Col
            className="product"
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
                        <a
                        className="textContent">
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
                    <div>
                        <Button
                        className="ButtonContent"
                        >Chọn mua</Button>
                    </div>
                </div>
            </Col>
    )
}

export default Product