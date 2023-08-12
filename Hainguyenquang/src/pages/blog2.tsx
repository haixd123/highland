import axios from "axios"
import { useState, useEffect } from "react"


const Blog2: any = () => {
    const [data, setData] = useState([])
    const fetchData = async () => {
        const response = await axios.get('http://localhost:3000/postsDataNews')
        if (response.status === 200) {
            setData(response.data)
        }
    }
    // console.log('data: ', data);

    useEffect(() => {
        fetchData();
    }, []);
    return data.map((record: any) => {
        if (record.id === 1) {
            return (
                <>
                    <div>{record}</div>
                </>
            )
        }
    })
}

export default Blog2