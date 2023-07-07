import { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router";

const Home = ({ children} : {children: ReactNode}) => {
    const navigate = useNavigate();

    useEffect(() => {
        navigate('/admin/123')
    }, [])
    return <div>
        {children}
    </div>
}

export default Home;