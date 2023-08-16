import { ReactElement } from "react"
import Authentication from "../../components/authentication"
import Login from "../login"
import AdminPage from "./admin/admin"
import ProductAdmin from "./product/product"
import NewsAdmin from "./news/news"
import UserAdmin from "./user/user"

const Admin = () => {
    return <Authentication>
        <AdminPage />
    </Authentication>
}


export default Admin