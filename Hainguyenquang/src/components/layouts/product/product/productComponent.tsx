import { Col, Image, Button, Drawer, Menu, InputNumber, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import "../../style.scss";
import { api } from "../../../../API/axios";
import {
  addToCart,
  INCREA_COUNT,
  DECRE_COUNT,
} from "../../../../store/actions/actionReducers";
import { useDispatch, useSelector } from "react-redux";
import store from "../../../../store";
import { PlusOutlined, MinusOutlined } from "@ant-design/icons";

export const App: React.FC = () => <Rate />;

const Product: any = () => {
  const [data, setData] = useState([]);
  const dataRedux: any = useSelector((state) => state);
  const dataCart = dataRedux?.addToCartReducer?.cart || [];
  const dataItem = dataRedux?.counterReducer?.state || [];
  const [inputItem, setInputItem] = useState(1);
  const [openMenu, setOpenMenu] = useState(false);
  const [dataStorage, setDateStorage]:any = useState([])

  const fetchData = async () => {
    const response = await api.get("/postsProduct");
    setData(response.data);
    console.log("response: ", response.data);
    setDateStorage(localStorage.getItem("cartItems") )
  };
  // const test1:any = localStorage.getItem("cartItems")
  // let name:any = ''
  // test1.map((dataStorage:any) => {
  // console.log('dataStorage', dataStorage)
  // return dataStorage
  // }
  // )

  console.log('data: ', data);
  useEffect(() => {
    fetchData();
  }, []);

  // Xử lý sản phẩm bán chạy, cafe Range, cafe uống liền tại đây
  // Tạo thêm 1 export function nữa hoặc file tsx mới


  
  

  return data.map((newData: any, index: any) => {
    const sum =
      (parseFloat(newData.discount) / 1000) * parseFloat(newData.price);

    const handleAddCart = () => {
      store.dispatch(addToCart(newData));
      setOpenMenu(true);
    };

    const handlePlusItem = () => {
      store.dispatch(INCREA_COUNT(1));
      handleCounterReducer();
    };

    const handleMinusItem = () => {
      store.dispatch(DECRE_COUNT(1));
      handleCounterReducer();
    };

    const handleCounterReducer = () => {
      setInputItem(dataRedux.counterReducer);
    };

    const onChange = (value: any) => {
      console.log("changed", value);
    };

    return (
      <Col
        className="product"
        lg={{ span: 6 }}
        md={{ span: 6 }}
        sm={{ span: 12 }}
        xs={{ span: 24 }}
      >
        <Drawer
          closable={false}
          placement="right"
          width={360}
          open={openMenu}
          onClose={() => {
            setOpenMenu(false);
          }}
        >
          {data.map((itemCart: any) => {
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
                    <Image src={itemCart.srcImage} alt="test" />
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
                    <span>{itemCart.price}</span>
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
                          <MinusOutlined
                            onClick={handleMinusItem}
                            style={{
                              width: "20px",

                              fontSize: "15px",
                              marginLeft: "5px",
                            }}
                          />
                        </a>
                        {/* <label
                          style={{
                            fontSize: "16px",
                            width: "28px",
                            border: "1px solid #e5e5e5",
                            margin: "0 5px",
                            borderRadius: "0",
                            textAlign: "center",
                          }}
                          // defaultValue={1}
                          // onChange={onChange}
                        >
                          {dataRedux.counterReducer}
                        </label> */}
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
                          value={dataRedux.counterReducer}
                        />
                        <a onClick={() => {}}>
                          <PlusOutlined
                            onClick={handlePlusItem}
                            style={{
                              width: "20px",

                              fontSize: "15px",
                              marginRight: "5px",
                            }}
                          />
                        </a>
                      </div>
                    </div>
                    <div style={{ textAlign: "end" }}>
                      <div>Giá tiền</div>
                      <a>Bỏ sản phẩm</a>
                    </div>
                  </div>
                </Col>
              </div>
            );
          })}
        </Drawer>

        <div>
          <a>
            <Image src={newData.srcImage} />
          </a>
          <a className="textContent">
            <span>{newData.name}</span>
          </a>
          <div>
            <span style={{ color: "#b5313a", textDecoration: "line-through" }}>
              {Math.round(sum)}
            </span>
            <span> {newData.price}</span>
          </div>
          <div>
            <App />
          </div>
          <div>
            <Button className="ButtonContent" onClick={handleAddCart}>
              Chọn mua
            </Button>
          </div>
        </div>
      </Col>
    );
  });
};

export default Product;
