import { useParams } from "react-router";
import Layouts from "../../components/layouts/admin";
import AdminComponent from "../../components/pages/admin";

const Admin = () => {
  return <Layouts>
    <AdminComponent />
  </Layouts>
}


export default Admin;