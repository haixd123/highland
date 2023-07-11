import Header from "../components/layouts/header/header";
import Footer from "../components/layouts/footer/footer";
import Slide from "../components/layouts/slide/Slide";

const SlidePage = () => {
  return (
    <>
      <Header />
      <Slide
        // style
        slice="slice2"
        title="DỊCH VỤ"
        content1="CÂU CHUYỆN NÀY LÀ CỦA CHÚNG MÌNH Highlands Coffee®"
        content2="Được thành lập vào năm 1999, bắt nguồn từ tình yêu dành cho đất Việt cùng với cà phê và cộng đồng nơi đây. Ngay từ những ngày đầu tiên, mục tiêu của chúng mình là có thể phục vụ và góp phần phát triển cộng đồng bằng cách siết chặt thêm sự kết nối và sự gắn bó giữa người với người."
        src="https://www.highlandscoffee.com.vn/vnt_upload/about/Highlands_4577_R3_-_Copy.jpg"
      />
      <Footer />
    </>
  );
};

export default SlidePage;
