import { Button, Col, Form, Image, Input, InputNumber, Radio } from "antd";
import TextArea from "antd/es/input/TextArea";
import "../../App.css";
import "./style.scss"
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";



const BuyProduct = () => {
    const dataRedux: any = useSelector(state => state)
    const data = dataRedux?.addToCartReducer?.cartItems || [];
    const [voucher, setVoucher] = useState('')
    const [value, setValue] = useState(1)
    const navigate = useNavigate();
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [phone, setPhone] = useState('')
    const [addres, setAddress] = useState('')

    const validateMessages = {
        required: '${label} is required!',
        types: {
            email: '${label} is not a valid email!',
            number: '${label} is not a valid number!',
        },
        number: {
            range: '${label} must be between ${min} and ${max}',
        },
    };

    let dataLength = 0
    let totalSum1 = 0
    let totalQuantity = 0

    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'VND',
    });

    const onChange = (e: any) => {
        console.log('radio checked', e.target.value);
        setValue(e.target.value);
    };

    const onFinish = (values: any) => {
        console.log(values);
    };

    const layout = {
        labelCol: { span: 24 },
        wrapperCol: { span: 24 },
    };

    //! chưa có data
    return (
        <div className="wrapper" style={{ height: '715px' }}>
            <div>
                <div className="buyproductImg">
                    <Image onClick={() => navigate('/home')} className="buyproductImgLink" placeholder={true} preview={false} src="https://bizweb.dktcdn.net/100/465/740/themes/884110/assets/checkout_logo.png?1691565408851" />
                </div>
                <div className="buyproductInfo">
                    <div className="buyproductInfoLabel" >Thông tin nhận hàng</div>
                    <div>
                        <Form
                            {...layout}
                            name="nest-messages"
                            onFinish={onFinish}
                            style={{ width: 700 }}
                            validateMessages={validateMessages}
                        >
                            <Form.Item name={['user', 'name']} label="Name" rules={[{ required: true, message: 'Please input your Name!' }]}>
                                <Input className="buyproductInput" placeholder="Họ tên" onChange={(e) => setName(e.target.value)} />
                            </Form.Item>
                            <Form.Item name={['user', 'email']} label="Email" rules={[{ type: 'email' }]}>
                                <Input className="buyproductInput" placeholder="Email" onChange={(e) => setEmail(e.target.value)} />
                            </Form.Item>
                            <Form.Item name={['user', 'phone']} label="Số điện thoại" rules={[{ type: 'number', min: 0, max: 999999999 }]}>
                                <InputNumber style={{ padding: '4px 0' }} className="buyproductInput" controls={false} placeholder="Số điện thoại"
                                //  onChange={(e) => setPhone(e.target.value)} 
                                />
                            </Form.Item>
                            <Form.Item name={['user', 'address']} label="Địa chỉ" rules={[{ required: true }]}>
                                <Input className="buyproductInput" placeholder="Địa chỉ" onChange={(e) => setAddress(e.target.value)} />
                            </Form.Item>
                            {/* <Input className="buyproductInput" placeholder="Email" />
                                <Input className="buyproductInput" placeholder="Số điện thoại" />
                                <Input className="buyproductInput" placeholder="Địa chỉ" /> */}
                        </Form>
                        <div>
                            <div style={{ margin: '5px 0' }}>Phương thức thanh toán</div>
                            <div>
                                <Radio.Group onChange={onChange} value={value}>
                                    <div className="buyproductRadio">
                                        <Radio value={1}>Thoanh toán khi giao hàng(COD)</Radio>
                                    </div>
                                    <div className="buyproductRadio">
                                        <Radio value={2}>Thanh toán online</Radio>
                                    </div>
                                </Radio.Group>
                            </div>
                        </div>
                        <div style={{ marginTop: '15px', marginRight: '30px' }}>
                            <TextArea rows={4} placeholder="Ghi chú" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="buyproductProduct" style={{ position: 'relative' }}>
                {data.map((record: any) => {
                    const priceSale = ((1 - record.discount / 100) * Number(record.price.replace(/₫|,/g, '')))
                    dataLength = data.length
                    let totalSum = data.reduce(function (accumulator: any, currentValue: any) {
                        return accumulator + ((1 - (parseFloat(currentValue.discount) / 100)) * Number(currentValue.price.replace(/₫|,/g, '')) * currentValue.quantity)
                    }, 0)

                    totalQuantity = data.reduce(function (accumulator: any, currentValue: any) {
                        return accumulator + currentValue.quantity
                    }, 0)

                    if (voucher === 'KM20K') {
                        totalSum1 = totalSum - 20000
                        console.log(totalSum1);
                    } else {
                        if (voucher === 'KM50K') {
                            totalSum1 = totalSum - 50000
                            console.log(totalSum1);
                        } else {
                            totalSum1 = totalSum
                            console.log(totalSum1);
                        }
                    }
                    return (
                        <>
                            <Col key={record.id} className="buyproductCol">
                                <Col span={4} className="buyproductColImg">
                                    <div className="buyproductQuantity">
                                        <span>{record.quantity}</span>
                                    </div>
                                    <div>
                                        <Image placeholder={true} preview={false} className="buyproductColImgLink"
                                            style={{ width: '50px', height: '50px', border: '1px solid #fff', borderRadius: '15%', boxSizing: 'border-box' }}
                                            src={`http://localhost:8888/getPhoto/${record.srcImage}`} />
                                    </div>
                                </Col>
                                <Col className="buyProductName" span={16}>
                                    <div style={{ boxSizing: 'border-box' }}>{record.name}</div>
                                    <div>{record.desc}</div>
                                </Col>
                                <Col span={4}>
                                    <div className="buyProductPrice">{formatter.format(Math.round(priceSale))}</div>
                                </Col>
                            </Col>
                        </>
                    )
                })}
                <div >
                    <div className="buyproductTotalQuantity">Đơn hàng ({totalQuantity} sản phẩm)</div>
                </div>
                <div className="buyproductInputSale">
                    <Input className="buyproductInputSale1" placeholder="Mã giảm giá" onChange={(e) => setVoucher(e.target.value)} />
                    <Button className="buyproductButton" >Áp dụng</Button>
                </div>
                <div className="buyproductTotal">
                    <div>Tổng cộng</div>
                    <div style={{ fontSize: '20px', color: '#a73c3f' }}>{formatter.format(Math.round(totalSum1))}</div>
                </div>
                <div style={{ textAlign: 'right' }}>
                    <Button className="buyproductButton" onClick={() => {
                        if (name === '') { alert('Bạn cần nhập tên') } else {
                            if (email === '') { alert('Bạn cần nhập email') } else {
                                if (phone === '') { alert('Bạn cần nhập tên số điện thoại') } else {
                                    if (addres === '') { alert('Bạn cần nhập tên địa chỉ') }
                                }
                            }
                        }
                    }} >đặt hàng</Button>
                </div>
            </div>
        </div>


    )
}

export const Test1 = (priceSale: any) => {


    return
}

export default BuyProduct