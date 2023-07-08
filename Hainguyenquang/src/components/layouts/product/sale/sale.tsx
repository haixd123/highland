import { Row, Col, Button, Space } from "antd"
import '../../style.scss'

const Sale = () => {
    return(
            <Col
            className="colSale"
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            >
                <div 
                className="saleContent"
                >
                    <div>
                        <span><b>Voucher</b></span>
                        <br /> 
                        <span>Voucher giảm 20K cho đơn hàng từ 340K. Lưu/Nhập mã tại mục Thanh Toán nhé!</span>
                    </div>
                    <div
                    className="slaceContentFooter">
                        <p>KM20K</p>
                        <Button style={{backgroundColor: '#b5313a', color: '#fff'}}>Lưu</Button>
                    </div>
                </div>
            </Col>
        
    )
}

export default Sale