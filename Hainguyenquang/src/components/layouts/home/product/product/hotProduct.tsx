import { Col, Image, Button, Drawer, Menu, InputNumber, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import "../../../style.scss";
import { api } from "../../../../../api";
import {
  addToCart,
  INCREA_CART,
  DECRE_CART,
  REMOVE_CART
} from "../../../../../store/actions/actionReducers";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../../../store";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";
import { relative } from "path";

export const App: React.FC = () => <Rate />;

const HotProduct: any = () => {
  const [data, setData] = useState([]);
  const dataRedux: any = useSelector((state) => state);
  const dataCart = dataRedux?.addToCartReducer?.cartItems || [];
  const dataItem = dataRedux?.counterReducer?.state || [];
  const [openMenu, setOpenMenu] = useState(false);
  const [dataStorage, setDateStorage]: any = useState([])
  let totalSum1 = 0

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'VND',
  });

  const fetchData = async () => {
    const response = await api.get("/postsProduct");
    setData(response.data);
    // console.log("response: ", response.data);
    setDateStorage(localStorage.getItem("cartItems"))
  };
  // const test1:any = localStorage.getItem("cartItems")
  // let name:any = ''
  // test1.map((dataStorage:any) => {
  // console.log('dataStorage', dataStorage)
  // return dataStorage
  // }
  // )

  // console.log('data: ', data);
  useEffect(() => {
    fetchData();
  }, []);

  // Xử lý sản phẩm bán chạy, cafe Range, cafe uống liền tại đây
  // Tạo thêm 1 export function nữa hoặc file tsx mới

  const handleAddCart = (newData: any) => {
    store.dispatch(addToCart(newData));
    setOpenMenu(true);
  };

  const handleRemoveCart = (itemCart: any) => {
    console.log('itemCart: ', itemCart);
    store.dispatch(REMOVE_CART(itemCart));
    if (dataCart.length <= 1) {
      setOpenMenu(false)
    }
  }
  const handlePlusItem = async (itemCart: any) => {
    store.dispatch(INCREA_CART(itemCart));
  };

  const handleMinusItem = (itemCart: any) => {
    store.dispatch(DECRE_CART(itemCart));
    console.log('itemCart: ', itemCart);
    if (dataCart.length <= 1 && itemCart.quantity <= 1) {
      setOpenMenu(false)
    }
  };



  return data.map((newData: any, index: any) => {
    if (newData.remaining < 80) {
      const number: any = Number(newData.price.replace(/₫|,/g, ''));
      const sum = (1 - (parseFloat(newData.discount) / 100)) * parseFloat(number);
      return (
        <>
          <Drawer
            closable={false}
            placement="right"
            width={360}
            open={openMenu}
            onClose={() => {
              setOpenMenu(false);
            }}
          >
            {dataCart.map((itemCart: any) => {
              const number: any = Number(itemCart.price.replace(/₫|,/g, ''));
              const priceProduct = (1 - (parseFloat(itemCart.discount) / 100)) * parseFloat(number);
              const sum: any = (priceProduct * itemCart.quantity)
              let totalSum = dataCart.reduce(function (accumulator: any, currentValue: any) {
                return accumulator + ((1 - (parseFloat(currentValue.discount) / 100)) * Number(currentValue.price.replace(/₫|,/g, '')) * currentValue.quantity)
              }, 0)
              totalSum1 = totalSum;

              return (
                <div style={{ display: "flex", marginBottom: "20px" }}>
                  <Col
                    style={{
                      marginRight: "10px",
                    }}
                    lg={{ span: 6 }}
                    md={{ span: 6 }}
                    sm={{ span: 6 }}
                    xs={{ span: 6 }}
                  >
                    <a>
                      <Image src={`http://localhost:8888/getPhoto/${itemCart.srcImage}`} alt="test" />
                    </a>
                  </Col>
                  <Col
                    lg={{ span: 18 }}
                    md={{ span: 18 }}
                    sm={{ span: 18 }}
                    xs={{ span: 18 }}
                  >
                    <div
                      style={{
                        fontSize: "16px",
                        fontWeight: "500",
                        marginBottom: "10px",
                      }}
                    >
                      <div>{itemCart.name}</div>
                      {/* <span>{itemCart.price}</span> */}
                    </div>
                    <div
                      style={{ display: "flex", justifyContent: "space-between" }}
                    >
                      <div>
                        <div>Số lượng</div>
                        <div
                          style={{
                            border: "1px solid #e5e5e5",
                            width: "100%",
                            maxWidth: "150px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "space-around",
                            marginTop: "4px",
                          }}
                        >
                          <a>
                            <MinusOutlined onClick={() => {


                              handleMinusItem(itemCart)
                            }}
                              style={{
                                width: "20px",
                                fontSize: "15px",
                                marginLeft: "5px",
                                color: "#454444"
                              }}
                            />
                          </a>
                          <Input
                            style={{
                              boxSizing: 'border-box',
                              fontSize: "16px",
                              width: "40px",
                              border: "1px solid #e5e5e5",
                              margin: "0 5px",
                              borderRadius: "0",
                              textAlign: "center",
                              padding: '4px 4px'
                            }}
                            value={itemCart.quantity}
                          />
                          <a>
                            <PlusOutlined
                              onClick={() => { handlePlusItem(itemCart) }}
                              style={{
                                width: "20px",
                                fontSize: "15px",
                                marginRight: "5px",
                                color: "#454444"
                              }}
                            />
                          </a>
                        </div>
                      </div>
                      <div style={{ textAlign: "end" }}>
                        <div style={{ color: '#c60505' }}>{formatter.format(Math.round(priceProduct))}</div>
                        <div style={{ color: '#c60505', marginTop: '10px' }}>
                          <a style={{ color: '#c60505' }} onClick={() => { handleRemoveCart(itemCart) }}> Bỏ sản phẩm </a>
                        </div>
                      </div>
                    </div>
                  </Col>
                </div>
              );
            })
            }
            <div>
              <div style={{ borderTop: '1px solid #ccc' }}>
                <div style={{ marginTop: '8px', display: 'flex', justifyContent: 'space-between' }}>
                  <div style={{ fontSize: '16px', fontWeight: '500' }} >Tổng tiền: </div>
                  <div style={{ fontSize: '16px', fontWeight: '500', color: '#c60505' }} >{formatter.format(Math.round(totalSum1))} </div>
                </div>
              </div>
              <div style={{
                width: '100%',
                backgroundColor: '#b5313a',
                color: '#fff',
                textAlign: 'center',
                padding: '6px 0',
                fontSize: '17px',
                border: '1px solid transparent',
                borderRadius: '4px',
                marginTop: '15px'
              }}><a href="/buyproduct" style={{ textDecoration: 'none', color: '#fff', padding: '6px 100px' }}>Thanh toán</a></div>
            </div>
          </Drawer>
          <Col
            className="product"
            lg={{ span: 6 }}
            md={{ span: 6 }}
            sm={{ span: 12 }}
            xs={{ span: 12 }}
          >
            <div>
              <a style={{ position: 'relative' }}>
                <Image placeholder={true} preview={false}
                  style={{ width: '100%', height: '100%', maxWidth: '270px', maxHeight: '270px', boxSizing: 'border-box', minHeight: '249.2px', minWidth: '249.2px' }}
                  src={`http://localhost:8888/getPhoto/${newData.srcImage}`} />
              </a>
              <span style={{ position: 'absolute', top: 10, left: 30, backgroundColor: 'red', padding: '4px 8px', color: '#fff', fontWeight: '500', fontSize: '14px' }}>{newData.discount}%</span>
              <div className="textContent">
                <a style={{ color: '#000' }}>
                  <span>{newData.name}</span>
                </a>
              </div>
              <div>
                <span style={{ textDecoration: "line-through", fontSize: '14px', fontWeight: '400' }}>
                  {newData.price}
                </span>
                <span style={{ color: "#b5313a", fontSize: '16px' }}> {formatter.format(Math.round(sum))}</span>
              </div>
              <Rate
              //  defaultValue={newData.price} 
              />
              <div>
                <Button style={{ textAlign: 'center' }} className="ButtonContent" onClick={() => handleAddCart(newData)}>
                  Chọn mua
                </Button>
              </div>
            </div>
          </Col>
        </>
      );
    }
  });
};

export default HotProduct;
