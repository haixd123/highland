import { Row, Col, Button, Space } from "antd"

const Sale = () => {
    return(
        <Row>
            <Col
            style={{padding: '0 15px'}}
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
            >
                <div style={{height: '100%', borderRadius: '4px', background: '#fff', border: '1px solid #b5313a', padding: '10px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', margin: '20px 0'}}>
                    <div>
                        <span><b>Voucher</b></span>
                        <br /> 
                        <span>Voucher giảm 20K cho đơn hàng từ 340K. Lưu/Nhập mã tại mục Thanh Toán nhé!</span>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: '#f5f5f5', padding: '0 3px', borderRadius: '5px'}}>
                        <p>KM20K</p>
                        <Button style={{backgroundColor: '#b5313a', color: '#fff'}}>Lưu</Button>
                    </div>
                </div>
            </Col>
        </Row>
        
    )
}

export default Sale