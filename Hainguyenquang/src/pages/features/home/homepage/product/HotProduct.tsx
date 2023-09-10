import { Col, Image, Button, Drawer, Menu, InputNumber, Input } from "antd";
import React, { useEffect, useState } from "react";
import { Rate } from "antd";
import "./Product.scss";
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
    setDateStorage(localStorage.getItem("cartItems"))
  };

  useEffect(() => {
    fetchData();
  }, []);

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
            <div className="drawerHandledata" style={{ display: "flex", marginBottom: "20px" }}>
              <Col
                key={itemCart.id}
                className="drawerCol"

                lg={{ span: 6 }}
                md={{ span: 6 }}
                sm={{ span: 6 }}
                xs={{ span: 6 }}
              >
                <a>
                  <Image
                    src={`http://localhost:8888/getPhoto/${itemCart.srcImage}`} alt="test"
                    fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3PTWBSGcbGzM6GCKqlIBRV0dHRJFarQ0eUT8LH4BnRU0NHR0UEFVdIlFRV7TzRksomPY8uykTk/zewQfKw/9znv4yvJynLv4uLiV2dBoDiBf4qP3/ARuCRABEFAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghggQAQZQKAnYEaQBAQaASKIAQJEkAEEegJmBElAoBEgghgg0Aj8i0JO4OzsrPv69Wv+hi2qPHr0qNvf39+iI97soRIh4f3z58/u7du3SXX7Xt7Z2enevHmzfQe+oSN2apSAPj09TSrb+XKI/f379+08+A0cNRE2ANkupk+ACNPvkSPcAAEibACyXUyfABGm3yNHuAECRNgAZLuYPgEirKlHu7u7XdyytGwHAd8jjNyng4OD7vnz51dbPT8/7z58+NB9+/bt6jU/TI+AGWHEnrx48eJ/EsSmHzx40L18+fLyzxF3ZVMjEyDCiEDjMYZZS5wiPXnyZFbJaxMhQIQRGzHvWR7XCyOCXsOmiDAi1HmPMMQjDpbpEiDCiL358eNHurW/5SnWdIBbXiDCiA38/Pnzrce2YyZ4//59F3ePLNMl4PbpiL2J0L979+7yDtHDhw8vtzzvdGnEXdvUigSIsCLAWavHp/+qM0BcXMd/q25n1vF57TYBp0a3mUzilePj4+7k5KSLb6gt6ydAhPUzXnoPR0dHl79WGTNCfBnn1uvSCJdegQhLI1vvCk+fPu2ePXt2tZOYEV6/fn31dz+shwAR1sP1cqvLntbEN9MxA9xcYjsxS1jWR4AIa2Ibzx0tc44fYX/16lV6NDFLXH+YL32jwiACRBiEbf5KcXoTIsQSpzXx4N28Ja4BQoK7rgXiydbHjx/P25TaQAJEGAguWy0+2Q8PD6/Ki4R8EVl+bzBOnZY95fq9rj9zAkTI2SxdidBHqG9+skdw43borCXO/ZcJdraPWdv22uIEiLA4q7nvvCug8WTqzQveOH26fodo7g6uFe/a17W3+nFBAkRYENRdb1vkkz1CH9cPsVy/jrhr27PqMYvENYNlHAIesRiBYwRy0V+8iXP8+/fvX11Mr7L7ECueb/r48eMqm7FuI2BGWDEG8cm+7G3NEOfmdcTQw4h9/55lhm7DekRYKQPZF2ArbXTAyu4kDYB2YxUzwg0gi/41ztHnfQG26HbGel/crVrm7tNY+/1btkOEAZ2M05r4FB7r9GbAIdxaZYrHdOsgJ/wCEQY0J74TmOKnbxxT9n3FgGGWWsVdowHtjt9Nnvf7yQM2aZU/TIAIAxrw6dOnAWtZZcoEnBpNuTuObWMEiLAx1HY0ZQJEmHJ3HNvGCBBhY6jtaMoEiJB0Z29vL6ls58vxPcO8/zfrdo5qvKO+d3Fx8Wu8zf1dW4p/cPzLly/dtv9Ts/EbcvGAHhHyfBIhZ6NSiIBTo0LNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiECRCjUbEPNCRAhZ6NSiAARCjXbUHMCRMjZqBQiQIRCzTbUnAARcjYqhQgQoVCzDTUnQIScjUohAkQo1GxDzQkQIWejUogAEQo121BzAkTI2agUIkCEQs021JwAEXI2KoUIEKFQsw01J0CEnI1KIQJEKNRsQ80JECFno1KIABEKNdtQcwJEyNmoFCJAhELNNtScABFyNiqFCBChULMNNSdAhJyNSiEC/wGgKKC4YMA4TAAAAABJRU5ErkJggg=="
                  />
                </a>
              </Col>
              <Col
                lg={{ span: 18 }}
                md={{ span: 18 }}
                sm={{ span: 18 }}
                xs={{ span: 18 }}
              >
                <div
                  className="drawerColName"


                >
                  <div>{itemCart.name}</div>
                </div>
                <div
                  className="drawerColQuantity"
                >
                  <div>
                    <div>Số lượng</div>
                    <div
                      className="drawerColQuantityHandle"
                    >
                      <a>
                        <MinusOutlined onClick={() => {


                          handleMinusItem(itemCart)
                        }}
                          className="drawerColQuantityIconMinus"

                        />
                      </a>
                      <Input
                        className="drawerColQuantityInput"

                        value={itemCart.quantity}
                      />
                      <a>
                        <PlusOutlined
                          onClick={() => { handlePlusItem(itemCart) }}
                          className="drawerColQuantityIconPlus"
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
          <div className="drawerMoney">
            <div className="drawerMoneyLabel" >
              <div className="drawerMoneyTotalLabel" >Tổng tiền: </div>
              <div className="drawerMoneyTotalCost" >{formatter.format(Math.round(totalSum1))} </div>
            </div>
          </div>
          <div className="Checkout" >
            <a href="/checkout" className="CheckoutButton">Thanh toán</a>
          </div>
        </div>
      </Drawer>
      {data.map((newData: any, index: any) => {
        if (newData.remaining < 80) {
          const number: any = Number(newData.price.replace(/₫|,/g, ''));
          const sum = (1 - (parseFloat(newData.discount) / 100)) * parseFloat(number);
          return (
            <>
              <Col
                key={newData.id}
                className="product"
                lg={{ span: 6 }}
                md={{ span: 10 }}
                sm={{ span: 12 }}
                xs={{ span: 24 }}
              >
                <div className="productTitle">
                  <a style={{ position: 'relative' }}>
                    <Image placeholder={true} preview={false}
                      className="imgProduct"
                      src={newData.srcImage ? `http://localhost:8888/getPhoto/${newData.srcImage}` : 'https://www.pacificfoodmachinery.com.au/media/catalog/product/placeholder/default/no-product-image-400x400.png'}
                    />
                  </a>
                  <span className="discount">{newData.discount}%</span>
                  <div className="textContent">
                    <a style={{ color: '#000' }}>
                      <span>{newData.name}</span>
                    </a>
                  </div>
                  <div>
                    <span className="productPrice">
                      {newData.price}
                    </span>
                    <span className="productPriceNew"> {formatter.format(Math.round(sum))}</span>
                  </div>
                  <Rate
                  //  defaultValue={newData.price} 
                  />
                  <div>
                    <Button className="ButtonContent" onClick={() => handleAddCart(newData)}>
                      Chọn mua
                    </Button>
                  </div>
                </div>
              </Col>
            </>
          );
        }
      })}
    </>
  )
};

export default HotProduct;
