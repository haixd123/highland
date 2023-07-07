import './App.css';
import React from 'react';
import HomePage from '../src/home/home'
// import { useFormik } from 'formik';
import Slide from './components/layouts/Slide';
import Header from './components/layouts/header'
import Footer from './components/layouts/footer'
import News from './components/layouts/news';
import { Col, Layout } from 'antd';
import SeeMore from './components/layouts/seemore';
import SlideProduct from './components/layouts/product/slide';
import Sale from './components/layouts/product/sale';
import Product from './components/layouts/product/product';
// import BasicExample from './components/testmenu'
import BrowerRouter from './routes';

function App() {
    
    return (
      <Layout className='wrapper'>
          {/* <Product />
          <Slide

          title='DỊCH VỤ'
          content1='CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH Highlands Coffee®' 
          content2='Được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.'
          src='https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg'
          />

          <SlideProduct />
          <Sale />

          <Col
          style={{display: 'flex', flexWrap: 'wrap'}}>
            <div style={{width: '100%'}}>
            <h1>TIN TỨC</h1>
            </div>
            <News />
            <News />
            <News />
            <News />
            <News />
            <News />
          </Col>
          <SeeMore />
          <Footer /> */}
        
        <Header />
        <Slide
          slice='slice2'
          title='DỊCH VỤ'
          content1='CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH Highlands Coffee®' 
          content2='Được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.'
          src='https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg'
          />
          <Slide

title='DỊCH VỤ'
content1='CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH Highlands Coffee®' 
content2='Được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.'
src='https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg'
/>
<Slide

          title='DỊCH VỤ'
          content1='CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH Highlands Coffee®' 
          content2='Được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.'
          src='https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg'
          />
        
        <Col
            className="wrapper"
         >
                    <News />
                    <News />
                    <News />
                    <News />

        </Col>
        <Footer />
        </Layout>
      );
    }
export default App;
