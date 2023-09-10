import { ReactElement } from "react"
import Authentication from "../../../../components/authentication"
import Login from "../../../auth/login"
import AdminPage from "./admin"
import ProductAdmin from "../product/Product"
import NewsAdmin from "../news/News"
import UserAdmin from "../user/User"

const Admin = () => {
    return <Authentication>
        <AdminPage />
    </Authentication>
}


export default Admin