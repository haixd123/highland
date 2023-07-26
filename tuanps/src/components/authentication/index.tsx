import { ReactElement } from "react";

const Authentication = ({ children }: { children: ReactElement<any, any> }) => {
    // get token từ localStorage

    // call api để check xem token có tồn tại trong bảng Account
    // (Thêm: check token còn hạn không ?)

    // dùng Json-server
    // call api để get ra dữ liệu => check xem token có tồn tại hay không ?

    // BE:
    // call api => dùng middle của BE để check xem tồn token hay không ?
    
    // SUCCESS
    // return children
    
    // ERROR
    // else push page login

    return (
        <>
            {children}
        </>
    )
}

export default Authentication;