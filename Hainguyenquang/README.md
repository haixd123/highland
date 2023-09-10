# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

Học redux -- xong
làm db bằng json -- xong
Call api with Json -- xong
admin:
-product--xong
-category--xong
-filter--xong
search -- xong
còn lại:
call Json api with redux -- xong
admin: làm bảng admin/voucher -- xong
CSS animation -- xong
Sửa category từ input thành thẻ cascader của ant -- xong

gạch ngang phần giá cũ ở HomePage -- xong

làm login-logout - xong
xử lý ảnh của admin - xong
logout: - xóa local storage push lại về login -- xong
làm lại giao diện login,register -- xong
làm lại search cho admin - xong

chưa get đc ảnh từ database -- xong
làm sidebar cho admin -- xong
add cart -- xong
chưa load lại khi sửa và xóa sản phẩm -- xong
set ảnh thành default nếu ảnh lỗi ở product -- xong
làm lại giao diện home(thêm giỏ hàng + User) -- xong

Chưa bọc đc authen -- xong
set rate cho product -- xong
Hiển thị ảnh trong phần edit(modal) -- xong
làm trang error -- xong
convert sang VND -- xong
remove hoặc giảm hết product thì card sẽ tự đóng -- xong
Làm thêm số sản phẩm đang có trong giỏ hàng(hiển thị đè lên icon product) -- xong
Chưa làm lớp giả làm cầu nối cho user -- xong

reponsive trang home bị lỗi -- xong
Làm trang thanh toán -- xong
-- Xử lý trùng fail -- xong

-- search admin: thiếu phần: search k đầy đủ thông tin cũng hiện(đang làm dở search admin product) -- xong
-- hiển thị quá nhiều drawer -- xong
chưa xử lý trùng khi edit cho admin/news và admin/user -- xong
-- Chưa làm lại search cho user và content -- xong
-- Header => chuyển trang sẽ đổi tên header
Chưa làm filter cho product -- xong

Chưa xử lý input nhập số cho addcart -- failed
-- làm news theo CKeditor -- failed

json-server --watch db.json

trùng key siderbar admin -- xong
thêm min-height cho pages admin -- xong
lỗi giá = NaN thì cho default = 0 -- xong
đặt hàng xong thì clear giỏ hàng -- xong
tắt preview ở buyproduct -- xong
input search cùng dòng với modal thêm người dùng -- xong
thêm key lúc data.map -- xong
load lại trang mới reset CKEditor -- xong
làm lại form phần buyproduct -- xong
drawer ở hotproduct đang lỗi render nhiều lần -- xong

Tạo content từ CKeditor => tự thêm ở admin/news -- xong ==> Tạo CKEditor trong admin/news
tạo content ở news => tự thêm ở CKeditor nhưng nội dung = 0 -- xong ==> Tạo CKEditor trong admin/news

-- Bọc admin đúng rồi nhưng ko access token đc
-- Khi chỉ vào user thì sẽ hiện tên user mình đăng nhập

Khi thêm mới ở Admin/News thì CKEditor vẫn lưu data cũ -- xong
css ở responsive phần home/header: Icon fail

dùng slug kiểu gì?
thêm user ở admin/user thì cũng tự thêm user ở server để đăng nhập

Responsive ở home/header: đổi chỗ biểu tượng và menu -- xong

thêm lớp bọc cho admin và product để ko phải viết lại heeader và footer -- xong
Thêm các folder cho chuẩn form: file TSX + SCSS -- xong
mỗi file có một file scss đi kèm -- xong
đặt lại tên file(đang làm cho features) -- xong
chỉnh lại các file (pages, assets, component) (xử lý component product trong chính file product) -- xong
đặt tên lại các folder -- xong
làm thêm responsive(đang làm home/content) -- xong
navigate giỏ hàng đang bị lỗi -- xong
buyproduct đang lỗi responsive -- xong
đơn hàng (0) sản phẩm của checkout đang lỗi -- xong
tổng cộng k cùng hàng với số tiền -- xong
home/product bị mất Sale của product -- xong
chuyển hết phần viết style thẳng từ thẻ div sang scss -- xong
xong thì bỏ hết phần comment -- xong


học useMemo, usereducer...

swiper js(làm slide)
babel build từ jsx thành html+css+js



cần làm thẻ default nếu ảnh bị lỗi -- xong

css blogrender


interface IProduct {
  "id": String;
  "name": String;
  // "ProductPrice": String;
  // "ProductInfo": String;
  // "ProductDetail": String;
  // "RatingStar": null;
  // "ProductImageName": String;
  // "ManufacturerId": 1;
  // "CategoryId": 1;
}

nếu k có id và name thì sao?