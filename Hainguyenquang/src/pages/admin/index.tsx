import { ReactElement } from "react"
import Authentication from "../../components/authentication"
import Login from "../login"
import AdminPage from "./admin/admin"

const Admin = () => {
    return <Authentication>
        <AdminPage />
    </Authentication>
}


export default Admin