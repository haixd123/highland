import { useParams } from "react-router";
import Layouts from "../../components/layouts/admin";
import AdminComponent from "../../components/pages/admin";
import Auth from "../../auth";

const Admin = () => {
  return <Auth>
    <Layouts>
      <AdminComponent />
    </Layouts>
  </Auth>
}


export default Admin;