import { useParams } from "react-router";
import Layouts from "../../components/layouts/admin";
import AdminComponent from "../../components/pages/admin";

const Admin = (props: any) => {
  const param = useParams();
  console.log('props: ', param);
  
  return <Layouts>
    <AdminComponent />
  </Layouts>
}


export default Admin;