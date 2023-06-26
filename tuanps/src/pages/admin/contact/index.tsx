import Layouts from "../../../components/layouts/admin";
import ContactComponent from "../../../components/pages/contact";

const ContactPage = () => {
    // nếu giao diện cần UI Layout thì import như dưới.
    return <Layouts>
        <ContactComponent />
    </Layouts>

    // nếu không cần thì bạn chỉ cần gọi component bình thường, không bọc bởi Layouts
    // return <ContactComponent />
}

export default ContactPage;