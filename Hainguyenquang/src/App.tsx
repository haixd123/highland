import './App.css';

import BrowerRouter from './routes';
import Context from './context';


const App = () => {
    
    return (

      <Context.Provider value={{
        isLoading: false,
      }}>
        <BrowerRouter />
      </Context.Provider>
//       <Layout className='wrapper'>
//           {/* <Product />
//           <Slide

//           title='DỊCH VỤ'
//           content1='CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH Highlands Coffee®' 
//           content2='Được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.'
//           src='https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg'
//           />

//           <SlideProduct />
//           <Sale />

//           <Col
//           style={{display: 'flex', flexWrap: 'wrap'}}>
//             <div style={{width: '100%'}}>
//             <h1>TIN TỨC</h1>
//             </div>
//             <News />
//             <News />
//             <News />
//             <News />
//             <News />
//             <News />
//           </Col>
//           <SeeMore />
//           <Footer /> */}
//           <Product />
//           <Product />
//           <Product />
        
//         <Header />
//         <Slide
//           slice='slice2'
//           title='DỊCH VỤ'
//           content1='CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH Highlands Coffee®' 
//           content2='Được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.'
//           src='https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg'
//           />
//           <Slide

// title='DỊCH VỤ'
// content1='CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH Highlands Coffee®' 
// content2='Được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.'
// src='https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg'
// />
// <Slide

//           title='DỊCH VỤ'
//           content1='CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH Highlands Coffee®' 
//           content2='Được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người.'
//           src='https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg'
//           />
        
//         <Col
//             className="wrapper"
//          >
//                     <News />
//                     <News />
//                     <News />
//                     <News />

//         </Col>
//         <Footer />
//         </Layout>
      );
    }
export default App;
